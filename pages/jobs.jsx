import Layouts from "@/src/layouts/Layouts";
import Head from 'next/head';
import Link from 'next/link';

const Jobs = () => {
  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url(images/store_3.jpg)" }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Join Our Team
          </h1>
        </div>
      </section>
      {/* Section Job Description */}
      <section className="section kf-about section-bg">
        <div className="container" style={{ padding: '3rem 0 0 0' }}>
          <div className="kf-titles">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Career Opportunities
            </div>
            <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
              No current openings, but we're always excited to meet passionate individuals!
            </h3>
            {/* <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Part-Time Barista at Brioux Falls Coffee
            </h3>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>
                  Ready to brew some magic in Sioux Falls’ vibrant Steel District? 
                  Join the Brioux Falls Coffee crew as a part-time barista 
                  (15-25 hours/week, including weekends) at our family-run coffee shop! 
                  We’re all about coffee, creativity, and community, creating a cozy, 
                  energetic space where locals and visitors connect over quality drinks 
                  and quick bites.
                </p>
                <h5
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  What You’ll Do
                </h5>
                <p>
                  In this fun, fast-paced role, you’ll craft delicious drinks like our 
                  signature French Toast Latte or Guava Lamp Lotus, prepare tasty bites, 
                  and deliver stellar customer service with a warm smile. You’ll keep 
                  our shop humming with daily tasks, ensuring every guest feels the 
                  Brioux Falls vibe. Great communication and teamwork are key to shining 
                  with customers and our tight-knit crew.
                </p>
                <h5
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Who We’re Looking For
                </h5>
                <p>
                  No coffee experience? No problem! We’ll train the right candidate 
                  who brings enthusiasm, attention to detail, and a love for connecting 
                  with people. You’ll even get to flex your creativity by helping 
                  design our monthly featured drinks. Enjoy awesome perks like free 
                  drinks during your shift, access to our building’s weight/exercise room, 
                  and a supportive team that feels like family.
                </p>
                <h5
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Why Join Us?
                </h5>
                <p>
                  If you’re 16+, love coffee, and vibe with our welcoming atmosphere, 
                  we can’t wait to meet you! Apply now to join Brioux Falls and make 
                  every sip a moment of joy in <Link href="https://www.thesteeldistrict.com/" target="_blank">The Steel District</Link>.
                </p>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
                style={{ marginTop: '2rem', textAlign: 'center' }}
              >
                <Link
                  href="https://form.jotform.com/252425606946159"
                  className="kf-btn element-anim-1 scroll-animate"
                  data-animate="active"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>apply now</span>
                  <i className="fas fa-chevron-right" />
                </Link>
              </div> */}
            </div>
          </div>
      </section>
    </Layouts>
  );
};

export default Jobs;
