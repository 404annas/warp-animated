import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white px-20 py-10">
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-4'>
          <img loading='lazy' className='w-8' src="https://cdn.prod.website-files.com/68711b2b9332a934a2b42342/687ca147ad466abd53276c96_Vertigo.svg" alt="Logo" />
          <p className='max-w-xs text-[#5A5A5A]'>Beautiful design has the power to captivate audiences.</p>
        </div>

        <div className='flex gap-20'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-[#C9C9CB] uppercase'>Utilities</h1>
            <p className='text-[#5A5A5A]'>Style Guide</p>
            <p className='text-[#5A5A5A]'>Instructions</p>
            <p className='text-[#5A5A5A]'>Licenses</p>
            <p className='text-[#5A5A5A]'>Changelog</p>
          </div>

          <div className='flex flex-col gap-4'>
            <h1 className='text-[#C9C9CB] uppercase'>Follow Us</h1>
            <p className='text-[#5A5A5A]'>Facebook</p>
            <p className='text-[#5A5A5A]'>Youtube</p>
            <p className='text-[#5A5A5A]'>Instagram</p>
          </div>
        </div>
      </div>

      <div className='border border-[#1C1C1C] mt-10'></div>

      <div className='flex items-center justify-between text-[#5A5A5A] pt-10'>
        <p>© 2025 WARP. All Rights Reserved.</p>
        <p>Powered By Webflow</p>
      </div>
    </footer>
  );
};

export default Footer;
