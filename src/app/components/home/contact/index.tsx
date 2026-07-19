import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="no-print">
      <div className="container">
        <div className="pt-16 md:pt-32 pb-20">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Контакт</h2>
            <p className="text-xl text-primary">( 05 )</p>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16">
              <Link
                href="tel:+359887979904"
                className="flex items-center gap-3 text-base lg:text-lg text-black font-normal border-b border-black pb-3 hover:text-primary hover:border-primary"
              >
                <Image
                  src="/images/icon/call-icon.svg"
                  alt="phone"
                  width={28}
                  height={28}
                />
                088 797 9904
              </Link>
              <Link
                href="mailto:teodora.markova1@abv.bg"
                className="flex items-center gap-3 text-base lg:text-lg text-black font-normal border-b border-black pb-3 hover:text-primary hover:border-primary"
              >
                <Image
                  src="/images/icon/mail-icon.svg"
                  alt="email"
                  width={28}
                  height={28}
                />
                teodora.markova1@abv.bg
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
