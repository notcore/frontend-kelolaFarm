const Typo = ({ Variant, children, ClassName="", ...props }) => {
  if (Variant == "h1") {
    return (
      <h1
        className={`text-4xl font-komerik tracking-tight text-balance ${ClassName}`}
        {...props}
      >
        {children}
      </h1>
    );
  } else if (Variant == "h2") {
    return (
      <div
        className={`scroll-m-20 text-xl font-helvetica-bold tracking-tight ${ClassName}`}
        {...props}
      >
        {children}
      </div>
    );
  }else if (Variant == "link") {
    return (
      <div
        className={`scroll-m-20 text-xl hover:text-indigo-700 transition-all duration-300 font-helvetica-helvetica tracking-tight ${ClassName}`}
        {...props}
      >
        {children}
      </div>
    );
  } else {
    return (
      <div className={`leading-7 font-helvetica text-gray-900 ${ClassName}`} {...props}>
        {children}
      </div>
    );
  }
};

export default Typo;