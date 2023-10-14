import "./styles/output.css";
const Output = () => {
  const materials = [
    {
      genName: "Gears",
      specificName: "1/8 sprong Aluminum Gear",
      url: "amazon.com/gear",
    },
    {
      genName: "Chassis",
      specificName: "Carbon Fiber Chassis Board",
      url: "amazon.com/Chassis",
    },
    {
      genName: "Bolts",
      specificName: "1/16 twine bolts",
      url: "amazon.com/bolts",
    },
    {
      genName: "Servo",
      specificName: "1.8W Servo 24inch",
      url: "amazon.com/gear",
    },
    {
      genName: "Arduino",
      specificName: "Arduino Motherboard",
      url: "amazon.com/gear",
    },
    {
      genName: "Balsa Wood",
      specificName: "1/8 inch Balsa planks",
      url: "amazon.com/Balsa",
    },
    {
      genName: "Foam Bricks",
      specificName: "1 square foot foam bricks",
      url: "amazon.com/foambricks",
    },
    {
      genName: "Propeler",
      specificName: "3-inch plastic propeller",
      url: "amazon.com/propeller",
    },
  ];

  const resources = [
    {
      name: "How to build a RC airplane",
      url: "youtube.com/dantheman/834%93874",
    },
    { name: "How do planes fly?", url: "youtube.com/infographicsWorld" },
    {
      name: "Foam RC Plane tutorial from SCRATCH!",
      url: "youtube.com/scratchworks",
    },
    {
      name: "Programming Arduino cmputer for RC Plane",
      url: "youtube.com/softwareisdabest",
    },
    {
      name: "Mechanical Engineering principles: Aerodynamics",
      url: "youtube.com/UniversityofWaterloo",
    },
    {
      name: "Foam RC Planes tutorial",
      url: "youtube.com/planetut",
    },
    {
      name: "Wiring for noobs",
      url: "https://youtube.com/eeKING",
    },
  ];

  return (
    <div className="output-container">
      <div className="output-container-ui">
        <div className="materials">
          {materials.map((item) => (
            <li>
              {item.genName}: {item.specificName} [
              <a href="https://www.youtube.com">link</a>]
            </li>
          ))}
        </div>
        <div className="resources">
          {resources.map((item) => (
            <li>
              {item.name}: {item.url}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Output;
