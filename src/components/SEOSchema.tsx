import { Helmet } from "react-helmet-async";

const SEOSchema = () => {
  const shows: { date: string; name: string; url: string }[] = [
    { date: "2026-09-17", name: "Guldgruvan Torsdags klubb", url: "https://www.ticketmaster.se/artist/guldgruvan-comedyklubb-biljetter/1241633" },
    { date: "2026-09-24", name: "Guldgruvan Torsdags klubb", url: "https://www.ticketmaster.se/artist/guldgruvan-comedyklubb-biljetter/1241633" },
    { date: "2026-10-01", name: "Guldgruvan Torsdags klubb", url: "https://www.ticketmaster.se/artist/guldgruvan-comedyklubb-biljetter/1241633" },
    { date: "2026-10-08", name: "Guldgruvan Torsdags klubb", url: "https://www.ticketmaster.se/artist/guldgruvan-comedyklubb-biljetter/1241633" },
    { date: "2026-10-15", name: "Guldgruvan Torsdags klubb", url: "https://www.ticketmaster.se/artist/guldgruvan-comedyklubb-biljetter/1241633" },
    { date: "2026-10-22", name: "Guldgruvan Torsdags klubb", url: "https://www.ticketmaster.se/artist/guldgruvan-comedyklubb-biljetter/1241633" },
    { date: "2026-10-29", name: "Guldgruvan Torsdags klubb", url: "https://www.ticketmaster.se/artist/guldgruvan-comedyklubb-biljetter/1241633" },
    { date: "2026-11-05", name: "Guldgruvan Torsdags klubb", url: "https://www.ticketmaster.se/artist/guldgruvan-comedyklubb-biljetter/1241633" },
    { date: "2026-11-12", name: "Guldgruvan Torsdags klubb", url: "https://www.ticketmaster.se/artist/guldgruvan-comedyklubb-biljetter/1241633" },
    { date: "2026-11-19", name: "Guldgruvan Torsdags klubb", url: "https://www.ticketmaster.se/artist/guldgruvan-comedyklubb-biljetter/1241633" },
    { date: "2026-11-26", name: "Guldgruvan Torsdags klubb", url: "https://www.ticketmaster.se/artist/guldgruvan-comedyklubb-biljetter/1241633" },
    { date: "2026-12-03", name: "Guldgruvan Torsdags klubb", url: "https://www.ticketmaster.se/artist/guldgruvan-comedyklubb-biljetter/1241633" },
    { date: "2026-12-10", name: "Guldgruvan Torsdags klubb", url: "https://www.ticketmaster.se/artist/guldgruvan-comedyklubb-biljetter/1241633" },
    { date: "2026-12-17", name: "Guldgruvan Torsdags klubb", url: "https://www.ticketmaster.se/artist/guldgruvan-comedyklubb-biljetter/1241633" }
  ];
  ];

  const eventSchema = shows.map((show) => ({
    "@context": "https://schema.org",
    "@type": "ComedyEvent",
    "name": show.name,
    "startDate": `${show.date}T20:00:00+01:00`,
    "doorTime": `${show.date}T19:30:00+01:00`,
    "endDate": `${show.date}T22:00:00+01:00`,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Sofia Common",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bondegatan 57",
        "addressLocality": "Stockholm",
        "postalCode": "116 34",
        "addressCountry": "SE"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Guldgruvan Comedyklubb",
      "url": "https://guldgruvan.lovable.app"
    },
    "offers": {
      "@type": "Offer",
      "url": show.url,
      "availability": "https://schema.org/InStock",
      "priceCurrency": "SEK",
      ...(show.date >= "2026-03-05" ? { "price": "0" } : {})
    },
    "performer": {
      "@type": "PerformingGroup",
      "name": "Hemlig lineup"
    }
  }));

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Guldgruvan Comedyklubb",
    "url": "https://guldgruvan.lovable.app",
    "description": "Stockholms bästa standupklubb med hemlig lineup varje torsdag på Södermalm. Gratis inträde från mars 2026!",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bondegatan 57",
      "addressLocality": "Stockholm",
      "postalCode": "116 34",
      "addressCountry": "SE"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    "name": "Guldgruvan Comedyklubb",
    "description": "Stockholms bästa standupklubb med hemlig lineup. Sveriges roligaste komiker varje torsdag. Gratis inträde!",
    "url": "https://guldgruvan.lovable.app",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bondegatan 57",
      "addressLocality": "Stockholm",
      "postalCode": "116 34",
      "addressCountry": "SE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "59.3152",
      "longitude": "18.0636"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Thursday",
      "opens": "19:30",
      "closes": "22:00"
    },
    "priceRange": "$$"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      {eventSchema.map((event, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(event)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOSchema;