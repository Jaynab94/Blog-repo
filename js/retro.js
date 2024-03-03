
const loadPost = async (inputCategory = "") => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${inputCategory}`);
    const data = await res.json();
    const posts = data.posts;
    // console.log(posts);
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
        postCard.classList = ` bg-[#F5F5DC] lg:w-full  rounded-3xl 
        border-[#797DFC]  border-2 lg:p-10 gap-10 mt-6 ) `
        // 
        postCard.innerHTML = `
        <div class="flex gap-6 ">


            <div class="w-[80px]  h-[80px] rounded-3xl avatar online">
            
            <div class="w-24 rounded-full bg-green avatar-online">
              <img src="${post.image}" />

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

                    <div id="email-button" class="translate-x-72"><button class="allBtn" btn-ghost"> <img src="icon/email 1.png"></button>
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




}


// handle search Button
const handleSearch = () => {

    // console.log('search handle')

    const inputField = document.getElementById('input-field');
    const inputCategory = inputField.value;
    // console.log(inputCategory)
    loadPost(inputCategory);
}





// const toggleLoadingSpinner = (isLoading) => {
//     const loadSpinner = document.getElementById('loding-spiner');
//     if (isLoading) {
//         loadSpinner.classList.remove('hidden');
//     } else {
//         loadSpinner.classList.add('hidden');
//     }
// }


loadPost();
loadLestestPost();


// const addPost = async () => {
//     const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
//     const data = await res.json();
//     const allData = data.posts;
//     displaySecondPost(allData);


// }

// const displaySecondPost = (allData) => {
//     const secondDiv = document.getElementById('second-div');
//     allData.forEach(post => {
//         post.
//         const secondPostDiv = document.createElement('div');
//         secondPostDiv.classList = `bg-[#12132D0D] border-2 rounded-[24px] lg:w-[40%] h-[500px]  px-10 py-6`;
//         secondPostDiv.innerHTML = ` <div class="flex justify-between items-center">
//        <h2 class="text-[20px] font-bold font-muslish">Title</h2>

//        <div class="flex">
//            <img src="icon/Frame (11).png" alt="">
//            <p class="text-[16px] font-muslish font-normal text-[#12132D99]">Mark as read <span id="mark-read-count">(4)</span> </p>
//        </div>

//    </div>

//    <div class=" bg-white h-20   mx-auto rounded-3xl mt-[20px]">
//        <div class="flex justify-between p-4  font-semibold text-[16px] text-[#12132D]">
//            <p>10 Kids Unaware of Their <br>
//                Halloween Costume</p>

//            <div class="flex justify-center items-center gap-2">
//                <img src="icon/icon-eye.png" alt="">
//                <p>1,568</p>
//            </div>
//        </div>
//    </div> `;
//         secondDiv.appendChild(secondPostDiv);
//     });
// }

const allBtn = Document.getElementById('email-button');
for (btn of allBtn) {
    allBtn.addEventListener('click', function (event) {
        const title = event.target.parentanode;

    })
}
