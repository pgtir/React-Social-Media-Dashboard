import OverviewCard from './OverviewCard';
function OverviewSection() {
    const overviewArr = [
        {
         mainClass : 'page-views',
         heading : 'Page Views',
         number : '87',
         percent :'3%',
         logo : 'images/icon-facebook.svg',
         upDown : 'images/icon-up.svg'
        },
        {
         mainClass : 'fb-likes',
         heading : 'Likes',
         number : '52',
         percent :'2%',
         logo : 'images/icon-facebook.svg',
         upDown : 'images/icon-down.svg'
        },
        {
         mainClass : 'insta-likes',
         heading : 'likes',
         number : '5462',
         percent :'2257%',
         logo : 'images/icon-instagram.svg',
         upDown : 'images/icon-up.svg'
        },
        {
         mainClass : 'insta-prof-views',
         heading : 'Profile Views',
         number : '52k',
         percent :'1375%',
         logo : 'images/icon-instagram.svg',
         upDown : 'images/icon-up.svg'
        },
        {
         mainClass : 'retweets',
         heading : 'Retweets',
         number : '117',
         percent :'303%',
         logo : 'images/icon-twitter.svg',
         upDown : 'images/icon-up.svg'
        },
        {
         mainClass : 'twitter-likes',
         heading : 'Likes',
         number : '507',
         percent :'553%',
         logo : 'images/icon-twitter.svg',
         upDown : 'images/icon-up.svg'
        },
        {
         mainClass : 'yt-likes',
         heading : 'Likes',
         number : '107',
         percent :'10%',
         logo : 'images/icon-youtube.svg',
         upDown : 'images/icon-down.svg'
        },
        {
         mainClass : 'total-views',
         heading : 'Total Views',
         number : '1407',
         percent :'12%',
         logo : 'images/icon-youtube.svg',
         upDown : 'images/icon-down.svg'
        },
    ]
    return (
        <section class="container overview ">
       <h1>Overview - Today</h1>
       <article class="row mt-4  ">
         {overviewArr.map((divElement) => {
             return (
                <div class={divElement.mainClass + " col-md-6 pe-xl-3 pe-md-3 col-xl-3 px-3 mb-4"}>
                 <OverviewCard
                  heading = {divElement.heading}
                  logo = {divElement.logo}
                  number = {divElement.number}
                  percent = {divElement.percent}
                  upDown = {divElement.upDown}
                 />   
               
              </div>
             )
         })}
       </article>
     </section>
    );
}

export default OverviewSection;