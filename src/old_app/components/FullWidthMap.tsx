

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8573485938223!2d77.08965359999999!3d28.6340372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05eeb79b3ec1%3A0x931c2ffc5cbebd62!2sLone%20Star%20Academy%20-%20Data%20Science%20%26%20Data%20Analytics%20Institute!5e0!3m2!1sen!2sin!4v1791454749232!5m2!1sen!2sin";

export default function FullWidthMap({
  src = MAP_SRC,
  title = "Lone Star Academy location map",
  height = "450px",
}) {
  return (
    <section className="px-20 py-10"
      aria-label={title}
      style={{
        width: "100%",
        height,
        // Breaks out of any centered/max-width parent so it spans the viewport
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        maxWidth: "100vw",
        overflow: "hidden",
      }}
    >
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        style={{
          border: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </section>
  );
}

