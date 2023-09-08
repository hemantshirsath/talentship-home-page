import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
  return (
    <div>
      <div className="App">
        <AnimatedCursor
        innerSize={12}
        outerSize={8}
        color="0, 200, 180"
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      </div>
    </div>
  );
};

export default CustomCursor;
