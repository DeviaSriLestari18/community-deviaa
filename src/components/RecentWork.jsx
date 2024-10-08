
import '../styles/RecentWork.css'; 

const RecentWork = () => {
  const works = [
    {
      title: "Work name here",
      description: "Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
      imageUrl: "https://s3-alpha-sig.figma.com/img/d362/e04b/51178b43a75aa2c3d3a576ab438a80f0?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hzInuUmek4Do9SUacxPFMu3iRnSRKh7PCO~M1VZGgbsyjglEX9s6TCFyhxKuGp7TVbVY4RScKyxAks9c4hCR6X5~7wBYkGgfKArSdzwO1~Io64zxke-cK4aCUMYS5CAKKkuG4eddCsEFmrCL7yrT2poJYPI5upB3o8m8HjvmrUmHT2pZO4~7Vzqtd8AqsxqHE7Y8qy~SsKprFDW7lVe-eEwshRitnLj2y8ILMgdtCTvil8peQ4eKH1YJL2fNL2crDge~o64aqKvxgUi4zGhrSROpEkc97rBcKYrW0V5N9UaaL1AJ6CNOm73pMMyXTjSTnewAvrQ1Z8j7IkVLHq6sRg__" 
    },
    {
      title: "Work name here",
      description: "Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt u.",
      imageUrl: "https://s3-alpha-sig.figma.com/img/fb30/4ad5/b6b34cb5b9178bad44d75d3292475f15?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aiVg3tvdxClD8vdo6WGgAICIeEJ4tukBbpeZNk8ZOgrRDY2A9-FOrfkjG5hNnjKP576IQ2ep6t~2cXIem4MOibknCWzbTJ0XqOxJgs~9cxRLmy68kixzYftrtnJIJOqz2X6vTmY54QQw5imTyGrDQLBWJBmnQohovxnBZWVov4t-hVAA-AnRYQpNhO2nQbXKHJ4evM2kQaWdLyE8bREUGD6fF4jArP5A4ryZUrzOHBsE2wqJpJn6Kaqqp8WunDErp~XepOeOnl9ByEvWZSFiEOpg1C9oZn~x4j7XpnrwhQOv4LX~tG8esigi1prZ2kjT~yf9DCdR4TYPxmZzr3Kb7A__"
    }
  ];

  return (
    <div className="recent-work">
      <h2 className="section-title">Recent Work</h2>
      <p className="section-subtitle">
      Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet,
       consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </p>
      
      <div className="work-gallery">
        {works.map((work, index) => (
          <div key={index} className="work-item">
            <img src={work.imageUrl} alt={work.title} className="work-image" />
            <h3 className="work-title">{work.title}</h3>
            <p className="work-description">{work.description}</p>
            <button className="know-more-btn">Know more &gt;</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentWork;