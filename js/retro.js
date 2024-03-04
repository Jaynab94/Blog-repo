
const loadPost = async (inputCategory = "") => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${inputCategory}`);
    const data = await res.json();
    const posts = data.posts;
    console.log(posts.isActive);
    displayCard(posts);
}


const displayCard = (posts) => {
    // console.log(posts);
    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = '';
    posts.forEach(post => {
        // console.log(post);
        // creat a div

        const postCard = document.createElement('div');
        postCard.classList = ` bg-[#F5F5DC] lg:w-full flex  rounded-3xl 
        border-[#797DFC]  border-2 lg:p-10 gap-10 mt-6 "bg-green": ) `
        // 
        postCard.innerHTML = `
        <div class="flex  gap-6  ">


              
            
            <div class="w-24 h-24 ">
               <div class="h-[15px] w-[15px] translate-x-16 translate-y-5 rounded-full ${post.isActive ? 'bg-green-500' : 'bg-red-500'}"></div>

              <img class="rounded-3xl" src="${post.image}}"

            </div>
         
          </div>




            <div class=" gap-2 w-full space-y-3">
                <div class="flex gap-3">
                    <h3 class="text-[14px] font-medium text-[#12132DCC]"># ${post.category
            }</h3>

                    <h3 class="text-[14px] font-medium text-[#12132DCC]">author: ${post.author.name}</h3>
                </div>

                <h1 class=" font-bold text-[20px] font-mushlish text-[#12132D] ">${post.title}</h1>
                <p class="text-[16px] font-inter text-[#12132D99]">${post.description}</p>


                <hr style="background-color: black; width: 100%;
                height: 2px; margin-top: 20px;">

                <div class="flex gap-7">
                    <div class="flex gap-4"> <img src="icon/message.png" alt="">
                        <p class="font-inter text-[16px] text-[#12132D99] font-medium">${post.comment_count}</p>
                    </div>

                    <div class="flex  gap-4">
                        <img src="icon/icon-eye.png" alt="">
                        <p class="font-inter text-[16px] text-[#12132D99] font-medium">${post.view_count}</p>
                    </div>

                    <div class="flex gap-4">
                        <img src="icon/clock-hour.png" alt="">
                        <p class="font-inter text-[16px] text-[#12132D99] font-medium">${post.posted_time} </p>
                    </div>

                    <div id="email-button" class="translate-x-48">
                    <button onclick="openPost('${post.title}','${post.view_count}')" class="allBtn" btn-ghost"> <img src="icon/email 1.png"></button>
                </div>
            </div>

        </div>
`
        cardContainer.appendChild(postCard);


    })
}




const loadLestestPost = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const letestPost = data;
    // console.log(letestPost)
    displayLetestPost(letestPost);


}


const displayLetestPost = (letestPost) => {
    const letestPostContainer = document.getElementById('letest-post-container');
    // console.log(letestPost);
    letestPost.forEach(letest => {
        // console.log(letest.title);

        // div creat
        const letestPostCard = document.createElement('div');
        letestPostCard.classList = `
          lg:w-full  bg-base-100 shadow-xl my-10 rounded-3xl border-2  
        `

        letestPostCard.innerHTML = `
        <figure class="px-10 pt-10 ">
        <img src="${letest.cover_image}"
            class="rounded-xl" />
    </figure>
    <div class="card-body space-y-4 ">
        <div class="flex gap-2">
            <img src="icon/Frame (12).png" alt="">
            <h2>${letest.author?.posted_date ? letest.author?.posted_date : 'No publish date'}</h2>
        </div>
        <h2 class="card-title font-bold font-muslish">${letest.title}</h2>
        <p class="font-muslish text-[16px] text-[#12132D99]">${letest.description} </p>
        <div class="flex items-center gap-4  ">
            <div class="w-[44px] h-[44px] rounded-full"> <img src="${letest.profile_image}" alt=""> </div>

            <div>
                <p class="font-semibold font-mushlish text-[16px] text-[#12132D]">${letest.author.name}</p>

                <p>${letest.author?.designation ? letest.author.designation : 'unknown'}</p>
            </div>
        </div>
    </div>
        `;

        letestPostContainer.appendChild(letestPostCard);
    });

    // spinner off

    // toggleLoadingSpinner(false);


}


// handle search Button
const handleSearch = () => {

    // toggleLoadingSpinner(true);


    const inputField = document.getElementById('input-field');
    const inputCategory = inputField.value;
    // console.log(inputCategory)
    loadPost(inputCategory);
}



// spinner

// const toggleLoadingSpinner = (isLoading) => {
//     const loadSpinner = document.getElementById('loding-spiner');
//     if (isLoading) {
//         loadSpinner.classList.remove('hidden');
//     } else {
//         loadSpinner.classList.add('hidden');
//     }
// }



// openpost

const openPost = (title, view_count) => {
    console.log('ha connect paisi')


}


loadPost();
loadLestestPost();
openPost();

