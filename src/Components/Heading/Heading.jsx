const Heading = ({children}) => {
    return (
        <h2 className={`bg-[url(/title-bg.png)] flex justify-center items-center text-4xl gap-1 font-bold text-center bg-no-repeat pb-20 pt-10 bg-center mt-5`} style={{backgroundSize: "100% 100%"}}>{children}</h2>
        
    );
};

export default Heading;