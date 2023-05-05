import '../../styles/index.css'

const Regular = () => {
    return (
        <>
            <div id="breadcrumb" className="section">
                {/*container */}
                <div className="container">
                   {/* row */}
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="breadcrumb-header">Regular Page</h3>
                            <ul className="breadcrumb-tree">
                                <li><a href="_Blank/components#">Home</a></li>
                                <li className="active">Blank</li>
                            </ul>
                        </div>
                    </div>
                   {/* /row */}
                </div>
               {/* /container */}
            </div>
           {/* /BREADCRUMB */}

           {/* SECTION */}
            <div className="section">
               {/* container */}
                <div className="container">
                   {/* row */}
                    <div className="row">
                    </div>
                   {/* /row */}
                </div>
               {/* /container */}
            </div>
           {/* /SECTION */}
        </>
);
};

export default Regular;