import FollowersCard from './FollowersCard';
function FollowerSection() {
  const sectionArr = [
    {
        siteName : 'facebook',
        userName : '@nathanf',
        followers : '1987',
        changeInFollowers : '12',
        logo : 'images/icon-facebook.svg',
        upDown: 'images/icon-up.svg'
    },
    {
        siteName : 'twitter',
        userName : '@nathanf',
        followers : '1044',
        changeInFollowers : '99',
        logo : 'images/icon-twitter.svg',
        upDown: 'images/icon-up.svg'
    },
    {
        siteName : 'instagram',
        userName : '@realnathanf',
        followers : '11k',
        changeInFollowers : '1099',
        logo : 'images/icon-instagram.svg',
        upDown: 'images/icon-up.svg'
    },
    {
        siteName : 'youtube',
        userName : 'Nathan F.',
        followers : '8239',
        changeInFollowers : '144',
        logo : 'images/icon-youtube.svg',
        upDown: 'images/icon-down.svg'
    }
  ];
  
  return (
    <section className="container followers  row d-flex justify-content-between mt-5 mt-md-4 mb-4 mb-md-3 px-0 ps-4">
      {sectionArr.map((divElement) => {
        return (
            <div className= {divElement.siteName + " col-md-6 pe-xl-3 pe-md-3 col-xl-3 px-0 mb-4"}>
             <FollowersCard
              logo = {divElement.logo}
              userName = {divElement.userName}
              followers = {divElement.followers}
              upDown = {divElement.upDown}
              changeInFollowers = {divElement.changeInFollowers}
             />
          </div>
        )
      })}
    </section>
  );
}

export default FollowerSection;
