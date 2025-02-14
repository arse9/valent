"use client";
import Wrapped from "@/lib/Wrapped";
import React from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import SpotifyPlayer from "@/components/Wrapped/SpotifyPlayer";
import WrappedContainer from "@/components/Wrapped/WrappedContainer";
import Serif from "@/components/Serif";
import InfoText from "@/components/Wrapped/InfoText";

const WrappedPlayerComponent = dynamic(
  () => import("@/components/Wrapped/WrappedPlayerComponent"),
  {
    ssr: false,
  }
);

function TikTokWrappedAppPage() {
  const [page, setPageRaw] = React.useState("intro");
  const setPage = (page: string) => {
    setPageRaw(page);
    window.scrollTo(0, 0);
  };

  const [currentParagraph, setCurrentParagraph] = React.useState(0);

  const paragraphs = [
    "Min kjære Linni, Jenta mi, Pusi,​‍​​​‍​​​‍​​​‍​​",  
    "I dag er det Valentinsdag, og jeg sitter her og prøver å finne ord som kan beskrive hvor mye du betyr for meg.​‍​​​‍​​​‍​​",  
    "Og helt ærlig? Jeg vet ikke om det finnes nok ord i verden til å gjøre det rettferdig.​‍​​​‍​​​‍​​",  
    "Men jeg skal prøve.​‍​​​‍​​​‍​​​‍​​​‍​​​‍​​​‍​​​‍​​​‍​​",  
    "Jeg skal prøve fordi du fortjener det, og fordi jeg vil at du skal vite, helt uten tvil, at du er det beste som noen gang har hendt meg.​‍​​",  
  
    "Det er rart å tenke på hvor fort tiden går.​‍​​​‍​​​‍​​​‍​​",  
    "453 dager siden vi ble sammen.​‍​​​‍​​​‍​​​‍​​​‍​​​‍​​​‍​​​‍​​",  
    "453 dager med latter, kjærlighet, gode minner – og selvfølgelig noen små irritasjoner her og der, men mest av alt, 453 dager med deg.​‍​​",  
    "Og jeg ville ikke byttet ut et eneste sekund.​‍​​​‍​​​‍​​​‍​​​‍​​​‍​​",  
  
    "Jeg husker første gangen jeg skjønte at du var noe helt spesielt.​‍​​​‍​​​‍​​",  
    "Vi møttes jo på skolen, men det var den dagen vi dro på kino sammen at det virkelig slo meg.​‍​​",  
    "Vi var med venninnene dine, men jeg husker at det føltes som om vi var alene i rommet.​‍​​​‍​​",  
  
    "At alt rundt oss forsvant, som om det ikke var viktig.​‍​​​‍​​​‍​​​‍​​​‍​​",  
    "Som om skjebnen prøvde å fortelle meg at det var her jeg skulle være, ved siden av deg.​‍​​",  
    "Jeg kan fortsatt kjenne igjen den følelsen.​‍​​​‍​​​‍​​​‍​​​‍​​​‍​​​‍​​",  
    "Den roen jeg følte.​‍​​​‍​​​‍​​​‍​​​‍​​​‍​​​‍​​​‍​​",  
    "Og samtidig den lille sitrende spenningen i magen, den følelsen av at dette betydde noe.​‍​​​‍​​​‍​​",  
    "At du betydde noe.​‍​​​‍​​​‍​​​‍​​​‍​​​‍​​​‍​​​‍​​",  
  
    "Fra det øyeblikket var jeg solgt.​‍​​​‍​​​‍​​​‍​​​‍​​​‍​​",  
    "Ikke bare fordi du er vakker – selv om du uten tvil er den vakreste jenta jeg noen gang har sett.​‍​​​‍​​",  
    "Men fordi du er du.​‍​​​‍​​​‍​​​‍​​​‍​​​‍​​​‍​​​‍​​",  
    "Fordi du har denne styrken i deg, denne uavhengigheten, denne måten du tar ansvar på og aldri lar deg dras inn i unødvendig tull.​‍​​​‍​​​‍​​",  
    "Fordi du ikke faker noe, ikke prøver å være noen du ikke er.​‍​​​‍​​​‍​​​‍​​​‍​​",  
    "Og fordi du er min.​‍​​​‍​​​‍​​​‍​​​‍​​​‍​​​‍​​",  
  
    "Jeg elsker hvordan du ser på meg når du tror jeg ikke legger merke til det.​‍​​​‍​​",  
    "Jeg elsker hvordan du sier navnet mitt når du vil ha oppmerksomheten min.​‍​​​‍​​",  
    "Jeg elsker hvordan vi har våre egne små greier, interne vitser som ingen andre forstår, måten vi kommuniserer på uten å si et ord.​‍​​​‍​​​‍​​",  
    "Jeg elsker tryggheten du gir meg, hvordan du får meg til å føle at uansett hva som skjer i verden, så er det greit, så lenge jeg har deg.​‍​​",  
  
    "Jeg vet at folk sier at kjærlighet skal være komplisert, at det skal være kaotisk og fylt med drama for å være ekte.​‍​​",  
    "Men det er ikke sånn med oss.​‍​​​‍​​​‍​​​‍​​",  
    "Det har aldri vært sånn med oss.​‍​​​‍​​​‍​​",  
    "Med deg føles alt bare… riktig.​‍​​​‍​​",  
    "Som om det er sånn det skal være.​‍​​​‍​​​‍​​​‍​​​‍​​",  
    "Som om vi var ment for hverandre, og alt annet bare er detaljer.​‍​​",  
  
    "Jeg tenker tilbake på alle de fine minnene vi har skapt sammen, og det er ett som skiller seg ut litt ekstra – fjorårets Valentinsdag.​‍​​",  
    "Vi kledde oss pent, spiste sushi og hadde en kveld som føltes både romantisk og gøy.​‍​​​‍​​​‍​​",  
    "Jeg husker hvordan du så ut den kvelden, hvordan du smilte, hvordan du lo, og hvordan jeg tenkte for meg selv at jeg aldri ville være noe annet sted enn akkurat der, med deg.​‍​​",  
  
    "Du har forandret livet mitt, Linni.​‍​​​‍​​​‍​​​‍​​​‍​​",  
    "Før jeg møtte deg, trodde jeg at kjærlighet var noe man bare leste om, så i filmer, eller hørte i sanger.​‍​​​‍​​",  
    "Noe uoppnåelig, noe fjernt, noe som kanskje ikke fantes på ekte.​‍​​​‍​​",  
    "Men du har vist meg at kjærlighet ikke bare er ekte – den er deg.​‍​​​‍​​",  
    "Det er måten du ser på meg, måten du lytter til meg, måten du alltid er der.​‍​​​‍​​",  
    "Du har vist meg hva det betyr å elske og bli elsket, og for det kommer jeg alltid til å være takknemlig.​‍​​",  
  
    "Hvis jeg kunne velge mellom deg og hele verden, ville jeg valgt deg hver eneste gang.​‍​​",  
    "Ingen mengde rikdom, ingen mengde suksess, ingen drøm kunne noensinne måle seg med det å ha deg ved min side.​‍​​",  
    "Du er min største drøm, min største suksess, og min største skatt.​‍​​",  
  
    "Når jeg tenker på fremtiden, ser jeg deg.​‍​​​‍​​​‍​​​‍​​​‍​​",  
    "Jeg ser oss, sammen, bygge et liv fylt med latter, eventyr og uendelig kjærlighet.​‍​​",  
    "Jeg gleder meg til den dagen vi kan flytte sammen, til de små øyeblikkene i hverdagen – lage frokost sammen en søndagsmorgen, se på filmer til langt på natt, reise verden rundt, og skape et hjem som føles som vårt.​‍​​",  
    "Jeg vil skjemme deg bort, gi deg alt du drømmer om, og alltid sørge for at du vet hvor verdifull du er.​‍​​",  
  
    "Linni, du er og kommer alltid til å være min store kjærlighet.​‍​​",  
    "Jeg lover deg at uansett hva som skjer, uansett hvor livet tar oss, vil jeg alltid være her for deg.​‍​​",  
    "Jeg vil alltid holde hånden din, alltid støtte deg, og alltid elske deg – med alt jeg har, hver eneste dag.​‍​​",  
  
    "Takk for at du er du.​‍​​​‍​​​‍​​",  
    "Takk for at du elsker meg.​‍​​​‍​​",  
    "Takk for at du lar meg elske deg.​‍​​​‍​​",  
  
    "Din for alltid,​‍​​​‍​​​‍​​",  
    "Arseni ❤️​‍​​​‍​​​‍​​"
  ];
  

  
  

  const nextParagraph = () => {
    if (currentParagraph < paragraphs.length - 1) {
      setCurrentParagraph(currentParagraph + 1);
    }
  };

  const prevParagraph = () => {
    if (currentParagraph > 0) {
      setCurrentParagraph(currentParagraph - 1);
    }
  };

  return (
    <div>
      <SpotifyPlayer /> {/* Spotify-spiller som spiller gjennom hele prosessen */}
      
      {page === "intro" && (
        <WrappedContainer>
          <div className="p-12 rounded-xl bg-brand-dark overflow-hidden max-w-xl mx-auto">
            <Serif>
              <h1 className="text-4xl md:text-5xl font-bold">
                Kjære Linni,
              </h1>
            </Serif>

            <InfoText className="mt-6">{paragraphs[currentParagraph]}</InfoText>

            <div className="flex justify-between mt-6">
              <Button
                onClick={prevParagraph}
                disabled={currentParagraph === 0}
                className="w-1/3"
              >
                <ArrowLeft size={16} className="mr-2" />
                Forrige
              </Button>
              <Button
                onClick={nextParagraph}
                disabled={currentParagraph === paragraphs.length - 1}
                className="w-1/3"
              >
                Neste
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>

          {/* Spotify iframe player */}
          <div className="mt-8">
            <iframe 
              style={{ borderRadius: "12px" }} 
              src="https://open.spotify.com/embed/playlist/2zb79UYiBV5qf4eHZquXWM?utm_source=generator" 
              width="100%" 
              height="152" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy">
            </iframe>
          </div>
        </WrappedContainer>
      )}

      {page === "loading" && (
        <WrappedContainer>
          <InfoText className="text-base">
            Laster inn kjærlighet...
          </InfoText>
        </WrappedContainer>
      )}

      {page === "ready" && (
        <WrappedContainer>
          <div className="p-12 rounded-xl bg-brand-light overflow-hidden max-w-xl mx-auto">
            <Serif>
              <h1 className="text-4xl md:text-5xl font-bold">
                Your Wrapped is ready!
              </h1>
            </Serif>

            <InfoText className="mt-6">
              We've crunched the numbers and found some...interesting insights.
            </InfoText>

            <Button
              onClick={() => {
                setPage("play");
              }}
              className="mt-6 w-full"
            >
              Show me!
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </WrappedContainer>
      )}

      {page === "play" && (
        <WrappedPlayerComponent
          statistics={{}} // Add your statistics data here
          persona={{}} // Add your persona data here
          spotify={null} // Add the spotify player logic here
          wrapped={{}} // Add your wrapped data here
        />
      )}
    </div>
  );
}

export default TikTokWrappedAppPage;