import { createSlice } from '@reduxjs/toolkit';

const missions = [
  {
    mission_name: 'Thaicom',
    mission_id: '9D1B7E0',
    manufacturers: ['Orbital ATK'],
    payload_ids: ['Thaicom 6', 'Thaicom 8'],
    wikipedia: 'https://en.wikipedia.org/wiki/Thaicom',
    website: 'http://www.thaicom.net/en/satellites/overview',
    twitter: 'https://twitter.com/thaicomplc',
    description:
      'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
  },
  {
    mission_name: 'Telstar',
    mission_id: 'F4F83DE',
    manufacturers: ['SSL'],
    payload_ids: ['Telstar 19V', 'Telstar 18V'],
    wikipedia: 'https://en.wikipedia.org/wiki/Telesat',
    website: 'https://www.telesat.com/',
    twitter: null,
    description:
      'Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009.',
  },
  {
    mission_name: 'Iridium NEXT',
    mission_id: 'F3364BF',
    manufacturers: ['Orbital ATK'],
    payload_ids: [
      'Iridium NEXT 1',
      'Iridium NEXT 2',
      'Iridium NEXT 3',
      'Iridium NEXT 4',
      'Iridium NEXT 5',
      'Iridium NEXT 6',
      'Iridium NEXT 7',
      'Iridium NEXT 8',
    ],
    wikipedia: 'https://en.wikipedia.org/wiki/Iridium_satellite_constellation',
    website: 'https://www.iridiumnext.com/',
    twitter: 'https://twitter.com/IridiumBoss?lang=en',
    description:
      "In 2017, Iridium began launching Iridium NEXT, a second-generation worldwide network of telecommunications satellites, consisting of 66 active satellites, with another nine in-orbit spares and six on-ground spares. These satellites will incorporate features such as data transmission that were not emphasized in the original design. The constellation will provide L-band data speeds of up to 128 kbit/s to mobile terminals, up to 1.5 Mbit/s to Iridium Pilot marine terminals, and high-speed Ka-band service of up to 8 Mbit/s to fixed/transportable terminals. The next-generation terminals and service are expected to be commercially available by the end of 2018. However, Iridium's proposed use of its next-generation satellites has raised concerns the service will harmfully interfere with GPS devices. The satellites will incorporate a secondary payload for Aireon, a space-qualified ADS-B data receiver. This is for use by air traffic control and, via FlightAware, for use by airlines. A tertiary payload on 58 satellites is a marine AIS ship-tracker receiver, for Canadian company exactEarth Ltd. Iridium can also be used to provide a data link to other satellites in space, enabling command and control of other space assets regardless of the position of ground stations and gateways.",
  },
  {
    mission_name: 'Commercial Resupply Services',
    mission_id: 'EE86F74',
    manufacturers: ['SpaceX'],
    payload_ids: [
      'Dragon Qualification Unit',
      'COTS Demo Flight 1',
      'COTS Demo Flight 2',
      'SpaceX CRS-1',
      'SpaceX CRS-2',
      'SpaceX CRS-3',
      'SpaceX CRS-4',
      'SpaceX CRS-5',
      'SpaceX CRS-6',
      'SpaceX CRS-7',
      'SpaceX CRS-8',
      'SpaceX CRS-9',
      'SpaceX CRS-10',
      'SpaceX CRS-11',
      'SpaceX CRS-12',
      'SpaceX CRS-13',
      'SpaceX CRS-14',
      'SpaceX CRS-15',
    ],
    wikipedia: 'https://en.wikipedia.org/wiki/Commercial_Resupply_Services#SpaceX',
    website: 'https://www.spacex.com/',
    twitter: 'https://twitter.com/SpaceX',
    description:
      'Commercial Resupply Services (CRS) are a series of contracts awarded by NASA from 2008–2016 for delivery of cargo and supplies to the International Space Station (ISS) on commercially operated spacecraft. The first CRS contracts were signed in 2008 and awarded $1.6 billion to SpaceX for 12 cargo transport missions and $1.9 billion to Orbital Sciences for 8 missions, covering deliveries to 2016. In 2015, NASA extended the Phase 1 contracts by ordering an additional three resupply flights from SpaceX and one from Orbital Sciences. After additional extensions late in 2015, SpaceX is currently scheduled to have a total of 20 missions and Orbital 10. SpaceX began flying resupply missions in 2012, using Dragon cargo spacecraft launched on Falcon 9 rockets from Space Launch Complex 40 at Cape Canaveral Air Force Station, Cape Canaveral, Florida. Orbital Sciences began deliveries in 2013 using Cygnus spacecraft launched on the Antares rocket from Launch Pad 0A at the Mid-Atlantic Regional Spaceport (MARS), Wallops Island, Virginia. A second phase of contracts (known as CRS2) were solicited and proposed in 2014. They were awarded in January 2016 to Orbital ATK, Sierra Nevada Corporation, and SpaceX, for cargo transport flights beginning in 2019 and expected to last through 2024.',
  },
];

const slice = createSlice({
  name: 'missions',
  initialState: missions,
  reducer: {
    getMissions: (mission) => mission,
  },
});
export const { getMissions } = slice.actions;
export default slice.reducer;
