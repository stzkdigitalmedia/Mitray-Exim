export default function manifest() {
  return {
    name: "Mitray - Leading Export Company in India",
    short_name: "Mitray Exim",
    description:
      "Mitray is a trusted export company in Gujarat, India specializing in fruits, spices, onions, pomegranates, bananas, mangoes, green chillies, and agricultural products.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B192C",
    theme_color: "#0B192C",
    icons: [
      {
        src: "/favicon/svg/SVG/512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
