
import '../styles/Testimonials.css'


function Testimonials() {
  return (
    <section className="testimonials-section">
       <h2>Testimonials</h2>
      <p className="section-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <div className="testimonial-quote">
              <i className="quote-icon">“</i>
              <p>{testimonial.quote}</p>
            </div>
            <div className="client-info">
              <img src={testimonial.clientImage} alt={testimonial.clientName} className="client-image" />
              <p className="client-name">{testimonial.clientName}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const testimonialsData = [
  {
    id: 1,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    clientName: "Client Name", 
    clientImage: "https://s3-alpha-sig.figma.com/img/9642/9bcb/0ad9eaa9198efed8f97eb2e3c40094cf?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QWnkCa6Ckxvqn6w6UOvjXA2eHkXZm7LDeuI4GVYlrgTR5WlXyxdP51oAg7UeNj2Ada3XaGdJ327wbJ7mAGrO-1DMFw-6vyuFgUXps9TKQfyT6IJXXSwlqUoAEoaGZMGc9YyD6Hvnr9OgGAUiS05TXnbhYOWCo7d7nP2o6VuKvBfKQLdv49SDIg90EvY1py6M1uzX4Rs1pwZ17I-F6RWQtZblX1gKaAevVYMHnAsKsRM~mUIVISJhyUdxIuAKOHSBf8mHD3fW54Mc3aOOJzOz~KTraVSGvi0JxIoDcWYn~wvLVJfAh3uPAjJaNcQ-h2AS2FQPRmOt9GDcRZ88Pi8fKQ__" // URL gambar
  },
  {
    id: 2,
    quote: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    clientName: "Client Name", 
    clientImage: "https://s3-alpha-sig.figma.com/img/9c4c/0394/9cecee4116d1bce16d7e488284ebc2da?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nZVfSE2FoIAhaV0HVzbmq3zBhg18jd1ggCBH9OvO8Kvvm29UEGDypnG4QeRnSz6HraQsqJq-hwliGxrWukKeMaGAdv~S4rBzrIR~tZcK8oJxLl7qjPCJWbegybwLcHqZnf9bi20eG8md-hIEOio3QU~3yAzOl15bzElaaJG8KsIH~3BjobqxREEwDEbzFK~qThAUThyhTRXTi0~YP-LKWwEYXhfBwbFnLqjMYI~lHHaD6P31mHYsWLIK5MRbpJGwlPBLjXPCUj8dfblEzR6RM~dpCAcFtf2RgiuspTJGqzCF~43DOHq2cCOApBnvU0AGS5-JZUSGoodbx~~f4Pvyyw__" // URL gambar
  },
  {
    id: 3,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    clientName: "Client Name", 
    clientImage: "https://s3-alpha-sig.figma.com/img/b27b/02f5/229f53bd797adee4b0325a98e57b851d?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=etvFZm87edpjdAStYZg3TAyBi5uh1BmsKP-Qu8w1Wbr29d5iMMfmNma5dITe54J6-ETlW0-aNFvxWjhibKJP~6jhkK84ymiumQMA7eHXrM-fbI8X5AoCOczifnL4cSz4JZSSS-iVAUvdfAOOXxUn2O0eEC0kDrj9MFILBlmbTyyjex-7kTGnRzzleb3CtGIzY38rLSmwEN7ibEqsDHnLbx6S6mHRC2uGZsa~mOhgd4-6A2GPHFu5g~OZIt~ljEoAMJarqbtzw48jGwaQ~PRsYLljnw~A1OXbuwCUScGNpfmY8ssvTuxu8z8qAcc7ylxywq1dE9Hmo~LgDPFcX7Gw0A__" // URL gambar
  },
  {
    id: 4,
    quote: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    clientName: "Client Name", 
    clientImage: "https://s3-alpha-sig.figma.com/img/11fc/8b41/8c92b514364bf78d4871bf22c0e0927a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ERDDP8BXpJ-M52DSARyZ7-VhjLUlGA-ivLACHclmF0xmSquGauQxHkVpTg3t2t52Ij4xZU82pq9g~UufEE-KDAP2VHD~gtYN1Cv8432hktMQWMFg8oKzI1kgtRfUosgLH0bWM5Vg1WFVjhfeh9D0Nj1rrHhfCCE7tBhX8Vg8eQAM-jJJ1h6K03x9yzyKqf1eTrlmcXQh6hHy0z9rEGr3WiJI91Ki~KlwU30hWUGEaFKiYMDulNhPpkBbZd3iHdgxLHZDntXjMsCCM~8NndGTKciTRZrAcBql21tqw7GRJ4tvmwnXP~19Jbfw4ymKOY4oI8T35D6vguC-xGJKYtqgoA__" // URL gambar
  }
];


export default Testimonials;
