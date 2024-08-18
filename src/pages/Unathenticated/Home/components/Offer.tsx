import AIPowered from "@assets/svg/star-box.svg";
import SmartSales from "@assets/svg/smart-sales.svg";
import Latency from "@assets/svg/latency.svg";
import REcognition from "@assets/svg/recognition.svg";
import Metrics from "@assets/svg/metric.svg";
import Call from "@assets/svg/Capa_1.svg";

interface IProps {
  item: {
    title: string;
    icon: any;
    text: string;
  };
}
const Offer = () => {
  const data = [
    {
      title: `A.I powered Real-time teleprompter`,
      icon: AIPowered,
      text: `  Discover the transformative capabilities of our A.i powered
          teleprompter by signing up. Trust our technology to lead you with
          accuracy and assurance, guaranteeing that your message connects with
          your clients seamlessly.`,
    },
    {
      title: `Trained to be Sales smart`,
      icon: SmartSales,
      text: `  A.i powered teleprompter is trained using cutting-edge strategies
       and sales psychology. Count on our technology to guide you with 
       precision and confidence`,
    },
    {
      title: `Low latency & Memory`,
      icon: Latency,
      text: `Close deals operates with an amazing speed and low latency 
      and is able to quickly recognize prospects to continue 
      from previous conversations`,
    },
    {
      title: `Comprehensive Call reports and data`,
      icon: Call,
      text: `Explore the extensive capabilities of our A.i powered teleprompter
       by signing up. Rely on our technology to guide you with precision and
        confidence, ensuring that your message resonates with your clients effortlessly.`,
    },
    {
      title: `Sensitivity And Recognition`,
      icon: REcognition,
      text: `Our A.I exhibits emotional intelligence during conversations
       showing empathy towards prospects, 
      their pain points and sticking points`,
    },
    {
      title: `Success rate and more Metrics`,
      icon: Metrics,
      text: `Our A.I. powered teleprompter is designed with advanced
       strategies and sales psychology in mind. Rely on our technology to
        lead you with accuracy and assurance, ensuring a high call success rate over time.`,
    },
  ];
  const Card = ({ item }: IProps) => {
    return (
      <div className="border rounded-lg p-5">
        <img src={item.icon} alt="" />
        <div className="mt-7 font-semibold text-2xl">{item.title}</div>
        <div className="mt-5">{item.text}</div>
      </div>
    );
  };
  return (
    <div className="app-width mt-20">
      <div className="font-medium text-[24px] md:text-[36px] max-w-[376px]">
        What do{" "}
        <span className="text-secondary">we Offer? Features and Benefits</span>
      </div>
      <div className="mt-5 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Offer;
