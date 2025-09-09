import EditableText from "../EditableField";
import Icon_phone from "../../assets/icons/phone.svg"
import Icon_email from "../../assets/icons/email.svg"
import Icon_adress from "../../assets/icons/adress.svg"

export default function ContactInfo() {
  return (
    <div className="mt-8 text-sm w-full">
      {/* <h2 className="text-xl font-semibold mb-2 uppercase tracking-wide border-b-2 border-gray-200 pb-2">Contact</h2> */}
      <EditableText
        tag="h2"
        className="text-xl font-semibold mb-2 uppercase tracking-wide border-b-2 border-gray-200 pb-2"
        value="Contact"
        onUpdate={(text) => onUpdate({ ...section, content: text })}
      />
      
      <div className="space-y-4 text-gray-200">
        <div className="flex items-center">
          <img src={ Icon_phone }  className="h-5 w-5 mr-3" alt="" />
          {/* <span>+0123 4XXX 78901</span> */}
          <EditableText
            tag="p"
            className=""
            value="+0123 4XXX 78901"
            onUpdate={(text) => onUpdate({ ...section, content: text })}
          />

        </div>
        <div className="flex items-center">
          <img src={ Icon_email }  className="h-5 w-5 mr-3" alt="" />
          {/* <span>yourname@mail.com</span> */}
          <EditableText
            tag="p"
            className=""
            value="yourname@mail.com"
            onUpdate={(text) => onUpdate({ ...section, content: text })}
          />

        </div>
        <div className="flex items-center">
          <img src={ Icon_adress }  className="h-5 w-5 mr-3" alt="" />
          {/* <span>
            Your Street Address <br />Town/City, zip code
          </span> */}
          <EditableText
            tag="p"
            className=""
            value={"Your Street Address\nTown/City, zip code"}
            onUpdate={(text) => onUpdate({ ...section, content: text })}
          />

        </div>
      </div>
    </div>
  );
}