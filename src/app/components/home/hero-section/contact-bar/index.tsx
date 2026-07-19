import Link from "next/link";
import { contactBar } from "@/app/data";
import { Mail, Phone } from "lucide-react";

const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#FE4300" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const iconMap: Record<string, React.ReactNode> = {
  email: <Mail size={24} stroke="#FE4300" />,
  phone: <Phone size={24} stroke="#FE4300" />,
};

const ContactBar = () => {

  return (
    <section>
      <div className="border-t border-muted">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 md:py-7">
            {/* Contact Items */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 md:gap-5 lg:gap-11">
              {contactBar.contactItems.map(
                (value: any, index: number) => (
                  <Link
                    key={index}
                    href={value?.link}
                    className="flex items-center gap-2 lg:gap-4 text-sm md:text-base"
                  >
                    {iconMap[value?.type] || null}

                    <h6 className="text-sm md:text-base xl:text-xl hover:text-primary">
                      {value?.label}
                    </h6>
                  </Link>
                ),
              )}
            </div>

            {/* Social Items */}
            <div className="flex items-center justify-center md:justify-end gap-4 md:gap-2.5">
              {contactBar.socialItems.map((value: any, index: number) => (
                <Link key={index} href={value?.link}>
                  <FacebookIcon />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;
