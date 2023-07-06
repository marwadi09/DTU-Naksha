function initMap() {
  let map=new google.maps.Map(document.getElementById("map"), {
    mapId: "17dba89734a03882",
    center: { lat: 28.749692162101724, lng: 77.11750609196983 },
    zoom: 17,
    mapTypeControl:false,
    fullscreenControl:false,
    streetViewControl:false,
  });
    
    // Name
  // Latitude,Longitude
  // Image URL
  // scaledSize width,height
  
    const markers=[
        ["Mic Mac",28.751267703001172,77.11652440356556,'/svg/mic-mac.svg',38,31],
        ["Running Track",28.75300342406418, 77.11555305208472,"/svg/running-track.svg",38,31],
        ["Gym",28.75365517519001,77.11512355215955,"/svg/gym.svg",38,31],
        ["Indoor Sports Hall",28.753501316511645,77.11713593130607,"/svg/indoor-sports-hall.svg",38,31],
        ["Sports Complex",28.752044776458572,77.11673813542826,"/svg/sports-complex.svg",38,31],
        ["CVR Hostel",28.752639703729933,77.11411736255629,"/svg/boys-hostel.svg",38,31],
        ["JCB Hostel",28.752194710146505,77.1147503573319,"/svg/boys-hostel.svg",38,31],
        ["VMH Hostel",28.751996176518723,77.11352438635521,"/svg/boys-hostel.svg",38,31],
        ["VVS Hostel",28.75154433995882, 77.11411785001273,"/svg/boys-hostel.svg",38,31],
        ["BCH Hostel",28.751434803528685, 77.11301681875341,"/svg/boys-hostel.svg",38,31],
        ["HCB Hostel",28.751051425118412, 77.11355562128455,"/svg/boys-hostel.svg",38,31],
        ["ABH Hostel",28.74557443692933, 77.11810811227357,"/svg/boys-hostel.svg",38,31],
        ["DTU Lake",28.749517897352934, 77.11293092269352,"/svg/dtu-lake.svg",38,31],
        ["Design Department",28.750996656640538, 77.11545314327077,"/svg/design-dept.svg",38,31],
        ["SPS 1-4",28.751647030242435, 77.11854540128715,"/svg/classroom.svg",38,31],
        ["SPS 5-8",28.751357363377497, 77.11889508448499,"/svg/classroom.svg",38,31],
        ["SPS 9-12",28.74962743581125, 77.12008372157976,"/svg/classroom.svg",38,31],
        ["Pragya Bhawan",28.748977584031433, 77.12011280737444,"/svg/pragya-bhawan.svg",38,31],
        ["SPS 13",28.750709121759673, 77.11592947595577,"/svg/classroom.svg",38,31],
        ["SPS 14",28.750633814873986, 77.11539848215695,"/svg/classroom.svg",38,31],
        ["Library",28.750626968790773, 77.11660883566896,"/svg/library.svg",38,31],
        ["Traing and Placement",28.75031327713067, 77.11713555539731,"/svg/tnp.svg",38,31],
        ["Auditorium",28.750312048478097, 77.11630429510787,"/svg/auditorium.svg",38,31],
        ["Computer Eng",28.749107984096312, 77.11728823360573,"/svg/computer.svg",38,31],
        ["Information Technology",28.748898481523472, 77.11807201473204,"/svg/computer.svg",38,31],
        ["Electrical and Computer Eng",28.74883982072777, 77.11764189094322,"/svg/electrical.svg",38,31],
        ["Electrical Eng",28.748873341186513, 77.11686766812333,"/svg/electrical.svg",38,31],
        ["Civil Eng",28.74919863301842, 77.11795094692611,"/svg/civil-eng.svg",38,31],
        ["BioTechnology",28.74983704977386, 77.11850213852085,"/svg/biotech.svg",38,31],
        ["Mechanical Eng",28.749954370212077, 77.11890358739043,"/svg/me.svg",38,31],
        ["Applied Chemical Dept",28.75135382527689, 77.11802422319995,"/svg/ac.svg",38,31],
        ["Applied Physics Dept",28.751102427545298, 77.11771835739457,"/svg/ap.svg",38,31],
        ["Applied Maths Dept",28.75084264925351, 77.11743160820201,"/svg/am.svg",38,31],
        ["Wind Tunnel Lab",28.75276164138976, 77.11797643166786,"/svg/wind-tunnel-lab.svg",38,31],
        ["Admin Block",28.750080070535372, 77.1161699117548,"/svg/admin-block.svg",38,31],
        ["Amul",28.74948508765539, 77.11842567207576,"/svg/amul.svg",38,31],
        ["Canteen",28.749325866313274, 77.1187602128004,"/svg/canteen.svg",38,31],
        ["OAT",28.749837049760856, 77.11769924078797,"/svg/oat.svg",38,31],
        ["Mini OAT",28.74996275022534, 77.11669561861406,"/svg/minioat.svg",38,31],
        ["Main Gate",28.745167040271337, 77.11697279233329,"/svg/entry-gate.svg",38,31],
        ["Entry Gate-2",28.745013169087823, 77.11780348372514,"/svg/entry-gate.svg",38,31],
        ["Delhi School of Management",28.746890382040913, 77.1170195918483,"/svg/dsm.svg",38,31],
        ["International Affairs",28.748603437669278, 77.11985096251014,"/svg/international-affairs.svg",38,31],
        ["ATM",28.747464823004467, 77.11956431548056,"/svg/atm.svg",38,31],
        ["Hostel Office",28.747946940638986, 77.11992701172208,"/svg/hostel-office.svg",38,31],
        ["ABH Hostel Mess",28.74570558761298, 77.11864002505271,"/svg/mess.svg",38,31],
        ["SNH Hostel-Girls",28.74762894838009, 77.11833582820373,"/svg/girl-hostel.svg",38,31],
        ["KC Hostel-Girls",28.748116194145382, 77.11885647281034,"/svg/girl-hostel.svg",38,31],
        ["Hospital",28.746674965871097, 77.119406367112,"/svg/hospital.svg",38,31],
        ["Parking",28.748485473650476, 77.11851132638948,"/svg/parking.svg",38,31],
        ["HPMC Juice",28.749449697296896, 77.11813108033091,"/svg/hpmc-juice.svg",38,31],
        ["Nescafe",28.749516372005473, 77.11673294481925,"/svg/nescafe.svg",38,31],
        ["Workshop",28.750839599756382, 77.11855812590316,"/svg/workshop.svg",38,31],
        ["Concert Ground",28.751831872530964,77.1194434055418,"/svg/concert.svg",38,31],
        ["Entry Check",28.74545431798072, 77.11709703080082,"/svg/checking.svg",38,31],
        ["Fountain",28.746151972377895, 77.11722563152516,"/svg/fountain.svg",38,31],
    ];

    for(let i=0;i<markers.length;i++)
    {
        const currentMarker=markers[i];

        const marker=new google.maps.Marker({
            position: { lat: currentMarker[1], lng: currentMarker[2] },
            map:map     ,
            title: currentMarker[0],
            icon: {
                url:currentMarker[3],
                scaledSize: new google.maps.Size(currentMarker[4], currentMarker[5]),
            },
            animation: google.maps.Animation.DROP,
          });
        
        const infowindow= new google.maps.InfoWindow({
            content:currentMarker[0],
            });
          
        marker.addListener("click",()=>{
            infowindow.open(map,marker);
            });
    }

  }
  