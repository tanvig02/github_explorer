const apiUrl = "https://api.github.com/users/";
const main = document.getElementById("main");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const getUser = async (userName) => {
  //fetch function takes the url to fetch
  const res = await fetch(apiUrl + userName);
  const data = await res.json();
  console.log(data);

  datesegments = data.created_at.split("T").shift().split("-");

  const card = `
  <div class="">
    <div class="bg-gray-700 rounded-lg mx-auto grid grid-rows-1 grid-cols-3 space-y-4">
      <div class="p-4 rounded-full">
        <img src="${data.avatar_url}" alt="" />
      </div>
      <div class="py-2 px-4 col-span-2">
        <div class="flex justify-between font-bold ">
          <h1 class="text-2xl">${data.name}</h1>
          <p class="text-sm">Joinded on ${datesegments[2]} ${
    months[datesegments[1] - 1]
  } ${datesegments[0]}</p>
        </div>
        <div>
          <a href="${data.html_url}" class="text-sky-400 font-thin">${
    data.login
  }</a>
          <p>${data.bio}</p>
          <div class="bg-slate-900 py-2 px-4 rounded-md flex justify-between" >
            <div>
              <p>Repo</p>
              <p>${data.public_repos}</p>
            </div>
            <div>
              <p>Followers</p>
              <p>${data.followers}</p>
            </div>
            <div>
              <p>Following</p>
              <p>${data.following}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
  main.innerHTML = card;
};

//calling the function
// getUser("tanvig02");

const getRepos = async (userName) => {
  const res = await fetch(apiUrl + userName + "/repos");
  const data = await res.json();
  console.log(data);
};
