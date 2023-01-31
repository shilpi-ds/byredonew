import * as React from "react";

type props = {
 ByredoLogo: any;
  ByredoLinks: any;
};

const Header = (props: any) => {
  const {ByredoLogo, ByredoLinks } = props;
  return (
    <div className="bg-gray-50">
    <div className="centered-container">
      <nav className="py-6 flex items-center justify-between">
        <div className="flex gap-x-4 items-center">
        <a href="#" className="">
                    <img
                      src={ByredoLogo.image.url} height={100} width={100}
                      alt="Byredo Logo"
                      title="Byredo"
                    />
                  </a>
          <div className="flex gap-x-4 text-sm font-semibold text-body">
          {ByredoLinks?.map((e: any) => {
                    return (
                      <>
                        <div className="menu-item">
                          <a href={e.link} className="">
                            {e.label}
                          </a>
                        </div>
                      </>
                    );
                  })}
          </div>
        </div>
        <div className="space-x-5"></div>
        
      </nav>
    </div>
    </div>
  );
};
export default Header;

