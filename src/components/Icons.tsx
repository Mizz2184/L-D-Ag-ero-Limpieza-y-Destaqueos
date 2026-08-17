import React from 'react';

export const LDAgueroLogo: React.FC<{ className?: string }> = ({ 
  className = "h-8 w-auto" 
}) => {
  return (
    <div className={`flex items-center gap-2 sm:gap-2.5 select-none whitespace-nowrap flex-shrink-0 ${className}`}>
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#29ABE2] flex items-center justify-center text-white shadow-sm flex-shrink-0">
        <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Water drop & pipe tool emblem */}
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          <path d="M12 12v6" />
          <path d="M9 15h6" />
        </svg>
      </div>
      <div className="flex flex-col text-left whitespace-nowrap">
        <span className="font-bold text-base sm:text-lg md:text-xl tracking-tight text-[#1E293B] font-['Outfit'] leading-none whitespace-nowrap">
          L&amp;D <span className="text-[#29ABE2]">Agüero</span>
        </span>
        <span className="text-[8px] sm:text-[9px] md:text-[10px] uppercase font-bold tracking-wider text-[#64748B] mt-0.5 whitespace-nowrap">
          Tanques &amp; Destaqueos
        </span>
      </div>
    </div>
  );
};

export const LDAgueroLogoLight: React.FC<{ className?: string }> = ({ className = "h-8 w-auto" }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none whitespace-nowrap flex-shrink-0 ${className}`}>
      <div className="w-9 h-9 rounded-xl bg-white text-[#29ABE2] flex items-center justify-center shadow-md flex-shrink-0">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          <path d="M12 12v6" />
          <path d="M9 15h6" />
        </svg>
      </div>
      <div className="flex flex-col text-left whitespace-nowrap">
        <span className="font-bold text-lg sm:text-xl tracking-tight text-white font-['Outfit'] leading-none whitespace-nowrap">
          L&amp;D <span className="text-[#D4E82A]">Agüero</span>
        </span>
        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-white/80 mt-0.5 whitespace-nowrap">
          Tanques &amp; Destaqueos Costa Rica
        </span>
      </div>
    </div>
  );
};

// Aliases for compatibility
export const CleanHubLogo = LDAgueroLogo;
export const CleanHubLogoLight = LDAgueroLogoLight;

export const ShieldCheckIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5 text-[#29ABE2]" }) => (
  <svg className={className} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.0316 2.6215C12.6124 1.91537 10.8757 1.5 9 1.5C7.12432 1.5 5.38763 1.91537 3.96837 2.6215C3.27239 2.96779 2.92439 3.14094 2.5872 3.68533C2.25 4.22974 2.25 4.75686 2.25 5.8111V8.42782C2.25 12.6904 5.65677 15.0603 7.62975 16.0753C8.18003 16.3585 8.45513 16.5 9 16.5C9.54487 16.5 9.81997 16.3585 10.3702 16.0753C12.3432 15.0603 15.75 12.6904 15.75 8.42782V5.8111C15.75 4.75687 15.75 4.22974 15.4128 3.68533C15.0756 3.14093 14.7276 2.96779 14.0316 2.6215Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.75 8.625C6.75 8.625 7.80592 8.81392 8.25 10.125C8.25 10.125 9.375 7.875 11.25 7.125" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const StarRatingIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4 text-[#F5A623]" }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.00719 2.0925C8.57252 1.3025 7.42852 1.3025 6.99319 2.0925C6.42071 3.13276 5.94879 4.22526 5.58385 5.35517C5.56664 5.39937 5.53637 5.43728 5.49706 5.46384C5.45776 5.49041 5.41129 5.50435 5.36385 5.50383C4.38583 5.52925 3.41099 5.6264 2.44719 5.7945C1.55585 5.94983 1.16319 7.01917 1.84052 7.68117C1.92585 7.76472 2.01208 7.84783 2.09919 7.9305C2.75173 8.54839 3.44266 9.12442 4.16785 9.65517C4.2008 9.67704 4.22576 9.70901 4.23898 9.74627C4.25221 9.78354 4.25298 9.82409 4.24119 9.86183C3.87508 10.9603 3.61348 12.0909 3.45985 13.2385C3.33319 14.1878 4.33852 14.7705 5.12319 14.3678C6.07577 13.8796 6.98662 13.3139 7.84652 12.6765C7.89155 12.6446 7.94536 12.6275 8.00052 12.6275C8.05568 12.6275 8.10949 12.6446 8.15452 12.6765C9.01391 13.3147 9.92482 13.8804 10.8779 14.3678C11.6625 14.7705 12.6679 14.1878 12.5412 13.2385C12.3878 12.0909 12.1264 10.9603 11.7605 9.86183C11.7487 9.82409 11.7495 9.78354 11.7627 9.74627C11.7759 9.70901 11.8009 9.67704 11.8339 9.65517C12.6555 9.05376 13.4331 8.39429 14.1605 7.68183C14.8379 7.01917 14.4452 5.94983 13.5539 5.7945C12.5898 5.62637 11.6148 5.52922 10.6365 5.50383C10.5892 5.50422 10.5429 5.49021 10.5037 5.46365C10.4645 5.4371 10.4344 5.39927 10.4172 5.35517C10.0534 4.22483 9.58077 3.13222 9.00719 2.0925Z"/>
  </svg>
);

export const EcoLeafIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5 text-[#29ABE2]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

export const PinLocationIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4 text-[#29ABE2]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export const PhoneCallingIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4 text-[#29ABE2]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

export const MailIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4 text-[#29ABE2]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
