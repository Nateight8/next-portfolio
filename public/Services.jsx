import Service from "./Service";

function Services() {
  return (
    <>
      <div className="section_title ">
        <h2 className="">Services</h2>
      </div>

      <Service skill="ux designer">
        <p className="text-center">
          Maybe an unpopular opinion: the word "passionate" is over-used, so
          I'll rather say that I am a skilled user experience designer and for
          over three years I have learnt the best approach to better user
          experience design - user-centric!
        </p>
      </Service>
      <Service skill="frontend dev">
        <p className="text-center">
          Oh...less I forget to add, I am a User Experience designer who codes.
          I love react so much that there's nothing more to add in my bio. I am
          very product using react with tailwindcss
        </p>
      </Service>
    </>
  );
}

export default Services;
