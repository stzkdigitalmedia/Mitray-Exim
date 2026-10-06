"use client";

export function WhatsAppButton() {
  return (
    <div
      className="fixed right-6 bottom-6 z-50 group"
      title="WhatsApp us for export inquiries"
    >
      {/* Pulsing Outer Glow Ring */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:opacity-0 transition-opacity duration-500"></div>
      
      <a
        href="https://wa.me/qr/2BFZ6ZDAMN2BC1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Mitray on WhatsApp for Export Inquiries"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 text-white fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 2C6.49 2 2 6.48 2 12.018a10.02 10.02 0 0 0 1.36 4.981L2 22l5.12-1.341a9.97 9.97 0 0 0 4.907 1.359h.004c5.54 0 10.03-4.48 10.03-10.018A10.018 10.018 0 0 0 12.031 2zm0 1.831c4.528 0 8.201 3.673 8.201 8.187c0 4.514-3.673 8.187-8.201 8.187a8.156 8.156 0 0 1-4.173-1.139l-.3-.179l-3.1.812l.827-3.013l-.196-.312a8.142 8.142 0 0 1-1.259-4.356c0-4.514 3.673-8.187 8.201-8.187zm-3.6 3.29c-.27 0-.5.1-.68.29c-.24.26-.82.8-.82 1.954s.84 2.27.96 2.433c.12.164 1.65 2.52 4 3.498c.56.228 1 .364 1.34.473c.56.177 1.08.15 1.48.09c.45-.067 1.4-.57 1.6-1.125c.2-.555.2-.1.14-.2s-.22-.15-.46-.27c-.24-.12-1.42-.7-1.64-.78c-.22-.08-.38-.12-.54.12c-.16.24-.62.78-.76.94c-.14.16-.28.18-.52.06a5.992 5.992 0 0 1-1.93-1.187a6.602 6.602 0 0 1-1.34-1.666c-.14-.24-.02-.37.1-.49c.11-.11.24-.28.36-.42c.12-.14.16-.24.24-.4c.08-.16.04-.3-.02-.42c-.06-.12-.54-1.3-.74-1.78c-.2-.48-.38-.4-.54-.41c-.16-.01-.34-.01-.52-.01z" />
        </svg>
      </a>
    </div>
  );
}
