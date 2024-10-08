import '../styles/Case.css';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png'; 
import image3 from '../assets/images/image3.png';  

const caseStudies = [
  {
    id: 1,
    tag: "Finance",
    title: 'Work name here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonLabel: 'View case study',
    buttonColor: 'btn-green',
    imageSrc: image1, // Gunakan gambar lokal
  },
  {
    id: 2,
    tag: "EdTech",
    title: 'Work name here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonLabel: 'View case study',
    buttonColor: 'btn-blue',
    imageSrc: image2, // Gunakan gambar lokal
  },
  {
    id: 3,
    tag: "Pharma",
    title: 'Work name here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonLabel: 'View case study',
    buttonColor: 'btn-green',
    imageSrc: image3, // Gunakan gambar lokal
  },
];

function Case() {
  return (
    <div className="case-studies">
      <h1>Case Studies</h1>
      <p className="section-description">
      Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="case-list">
        {caseStudies.map((caseStudy) => (
          <div key={caseStudy.id} className="case-item">
            <img src={caseStudy.imageSrc} alt={caseStudy.title} className="case-study-image" />
            <div className="case-content">
              <span className={`case-study-tag ${caseStudy.tag.toLowerCase()}`}>{caseStudy.tag}</span>
              <h3>{caseStudy.title}</h3>
              <p>{caseStudy.description}</p>
              <button className={`case-study-btn ${caseStudy.tag.toLowerCase()}`}>View case study &gt;</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Case;
