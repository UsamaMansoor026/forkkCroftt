import React, { useEffect } from "react";
import { ContactUsForm, PageHeader } from "../components";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeader heading="Contact" targetLink="contact us" />

      <section className="global-padding global-section flex flex-col lg:flex-row items-start gap-8">
        {/* Contact info */}
        <div className="someyend max-w-[80%] w-full mx-auto lg:w-[50%] text-primary-text">
          <h3 className="font-semibold text-xl mb-6">Contact Information</h3>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Address */}
            <div className="mb-2 flex flex-col gap-1">
              <h5>Address:</h5>
              <p className="text-captions">
                198 West 21th Street, Suite 721 <br /> New York NY 10016
              </p>
            </div>

            {/* Phone */}
            <div className="mb-2 flex flex-col gap-1">
              <h5>Phone:</h5>
              <a
                href="tel:+923333333333"
                className="text-primary-text underline underline-offset-4"
              >
                +92 333 3333333
              </a>
            </div>
          </div>

          <hr className="my-7" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Email */}
            <div className="mb-2 flex flex-col gap-1">
              <h5>Email:</h5>
              <a
                href="mailto:forkcroft@gmail.com"
                className="text-primary-text underline underline-offset-4"
              >
                forkcroft@gmail.com
              </a>
            </div>

            {/* Website */}
            <div className="mb-2 flex flex-col gap-1">
              <h5>Website:</h5>
              <a
                href=""
                className="text-primary-text underline underline-offset-4"
              >
                forkcroft.com
              </a>
            </div>
          </div>
        </div>

        <div className="someyend max-w-[80%] w-full mx-auto lg:w-[50%]">
          <ContactUsForm />
        </div>
      </section>
    </>
  );
};

export default ContactPage;
