const users = [
  {
    name: { title: "Mr", first: "Nikolaj", last: "Hansen" },
    picture: "https://randomuser.me/api/portraits/men/1.jpg",
    location: {
      city: "Bykle",
      country: "Norway",
    },
  },
  {
    name: { title: "Mr", first: "Alexis", last: "Hale" },
    picture: "https://randomuser.me/api/portraits/men/2.jpg",
    location: {
      city: "Canberra",
      country: "Australia",
    },
  },
  {
    name: { title: "Mr", first: "Connor", last: "Bradford" },
    picture: "https://randomuser.me/api/portraits/men/3.jpg",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
  },
  {
    name: { title: "Mr", first: "Sidney", last: "Poole" },
    picture: "https://randomuser.me/api/portraits/men/4.jpg",
    location: {
      city: "Copenhagen",
      country: "Denmark",
    },
  },
  {
    name: { title: "Ms", first: "Alexia", last: "Mills" },
    picture: "https://randomuser.me/api/portraits/women/4.jpg",
    location: {
      city: "Nassau",
      country: "Bahamas",
    },
  },
  {
    name: { title: "Ms", first: "Tiana", last: "Rivers" },
    picture: "https://randomuser.me/api/portraits/women/5.jpg",
    location: {
      city: "Washington D.C.",
      country: "United States",
    },
  },
  {
    name: { title: "", first: "Just", last: "Improvement" },
    picture: "wpprofile.jpeg",
    location: {
      city: "Baku",
      country: "Azerbaijan",
    },
  },
  {
    name: { title: "Ms", first: "Emmy", last: "Arroyo" },
    picture: "https://randomuser.me/api/portraits/women/7.jpg",
    location: {
      city: "Stockholm",
      country: "Sweden",
    },
  },
  {
    name: { title: "Ms", first: "Lyra", last: "Spencer" },
    picture: "https://randomuser.me/api/portraits/women/8.jpg",
    location: {
      city: "Madrid",
      country: "Spain",
    },
  },
  {
    name: { title: "Ms", first: "Delilah", last: "Dyer" },
    picture: "https://randomuser.me/api/portraits/women/9.jpg",
    location: {
      city: "Bern",
      country: "Switzerland",
    },
  },
];

let inputEl = document.querySelector("input");

function creatProfile(object) {
  let profile = document.createElement("div");
  profile.classList.add("profile");

  let img = document.createElement("img");

  let info = document.createElement("div");
  info.classList.add("info");

  profile.appendChild(img);
  profile.appendChild(info);
  document.querySelector("main").appendChild(profile);

  let userName = document.createElement("p");
  userName.textContent = `${object.name.first} ${object.name.last}`;
  userName.classList.add("name");
  info.appendChild(userName);

  let userLocation = document.createElement("p");
  userLocation.textContent = `${object.location.city} ${object.location.country}`;
  userLocation.classList.add("location");
  info.appendChild(userLocation);

  img.src = object.picture;
}

for(let user of users) {
  creatProfile(user);
}

inputEl.addEventListener("input", () => {
  let inputValue = inputEl.value;
  if(inputValue != "") {
    document.querySelector("main").innerHTML = "";
  }
  for (let user of users) {
    let fullname = `${user.name.title} ${user.name.first} ${user.name.last} ${user.location.city} ${user.location.country}`;
    if (fullname.toLowerCase().includes(inputValue.toLowerCase())) {
      creatProfile(user);
    }
  }
});
