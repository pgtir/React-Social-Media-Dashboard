import "./Header.css";

function Header(props) {
  
  return (
    <header className="container row justify-content-between align-items-center text-start pe-0">
      <section className="heading col py-2 pb-md-0">
        <h1>Social Media Dashboard</h1>
        <h4>Total Followers: 23,004</h4>
      </section>
      <hr className="d-md-none" size = '3'></hr>
      <section className="mode col row justify-content-between  align-items-center pe-0 pe-md-3">
        <span className="theme-name col text-md-end">Dark Mode</span>
        <div className="theme-switcher col text-end p-0 ms-2 " onClick={props.themeSwitcher}>
          <div className="toggler text-start" data-toggleto={props.toggleTo}></div>
        </div>
      </section>
    </header>
  );
}

export default Header;
