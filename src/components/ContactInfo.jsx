import React from 'react';
import Icon_phone from "../assets/icons/phone.svg"
import Icon_email from "../assets/icons/email.svg"
import Icon_adress from "../assets/icons/adress.svg"

export default function ContactInfo() {
  return (
    <div className="mt-8 text-sm">
      <h2 className="text-xl font-semibold mb-2 uppercase tracking-wide border-b-2 border-gray-200 pb-2">Contact</h2>
      <div className="space-y-4 text-gray-200">
        <div className="flex items-center">
          <img src={ Icon_phone }  className="h-5 w-5 mr-3" alt="" />
          <span>+0123 4XXX 78901</span>
        </div>
        <div className="flex items-center">
          <img src={ Icon_email }  className="h-5 w-5 mr-3" alt="" />
          <span>yourname@mail.com</span>
        </div>
        <div className="flex items-center">
          <img src={ Icon_adress }  className="h-5 w-5 mr-3" alt="" />
          <span>
            Your Street Address
            <br />
            Town/City, zip code
          </span>
        </div>
      </div>
    </div>
  );
}