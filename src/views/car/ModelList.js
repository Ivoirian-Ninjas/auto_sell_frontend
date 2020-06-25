import React from 'react'

export default function ModelList({make}) {
// console.log(make)
console.log(make)
const switch_statement = () =>{

 switch (make) {
      case 'Acura':
          return (<React.Fragment>
                    <option disabled selected value=''> -- select an option -- </option>
                    <option label="ILX" value="ILX">ILX</option>
                    <option label="MDX" value="MDX">MDX</option>
                    <option label="NSX" value="NSX">NSX</option>
                    <option label="RDX" value="RDX">RDX</option>
                    <option label="RLX" value="RLX">RLX</option>
                    <option label="TLX" value="TLX">ILX</option>
                </React.Fragment>)
          break;

        case 'Alfa Romeo':
        return  (<React.Fragment>
                     <option disabled selected value=''> -- select an option -- </option>
                    <option label="4C" value="4C">4C</option>
                    <option label="Giulia" value="GIULIA">Giulia</option>
                    <option label="Stelvio" value="Stelvio">Stelvio</option>
                </React.Fragment>)
        break;
        case 'Aston Martin':
        return  (<React.Fragment>
                 <option disabled selected value=''> -- Not Available -- </option>

            </React.Fragment>)
        break;
        case 'Audi':
        return (<React.Fragment>
                <option disabled selected value=''> -- select an option -- </option>
                <option label="A3" value="A3">A3</option>
                <option label="A4" value="A4">A4</option>
                <option label="A5" value="A5">A5</option>
                <option label="A6" value="A6">A6</option>
                <option label="A7" value="A7">A7</option>
                <option label="A8" value="A8">A8</option>
                <option label="Allroad" value="Allroad">Allroad</option>
                <option label="e-tron" value="e-tron">e-tron</option>
                <option label="Q3" value="Q3">Q3</option>
                <option label="Q5" value="Q5">Q5</option>
                <option label="Q7" value="Q7">Q7</option>
                <option label="Q8" value="Q8">Q8</option>
                <option label="R8" value="R8">R8</option>
                <option label="S4" value="S4">S4</option>
                <option label="TT" value="TT">TT</option>
            </React.Fragment>)
        break;
        case 'Bentley':
        return (<React.Fragment>
                <option disabled selected value=''> -- select an option -- </option>
                <option label="Bentayga" value="Bentayga">Bentayga</option>
                <option label="Flying Spur" value="Flying Spur">Flying Spur</option>
            </React.Fragment>)
        break;
        case 'BMW':
        return (<React.Fragment>
                     <option disabled selected value=''> -- select an option -- </option>
                    <option label="2 Series" value="2 Series">2 Series</option>
                    <option label="2 Series Gran" value="2 Series Gran">2 Series Gran</option>
                    <option label="3 Series" value="3 Series">3 Series</option>
                    <option label="4 Series" value="4 Series">4 Series</option>
                    <option label="5 Series" value="5 Series">5 Series</option>
                    <option label="7 Series" value="7 Series">7 Series</option>
                    <option label="8 Series" value="8 Series">8 Series</option>
                    <option label="i8" value="i8">i8</option>
                    <option label="X1" value="X1">X1</option>
                    <option label="X2" value="X2">X2</option>
                    <option label="X3" value="X3">X3</option>
                    <option label="X4" value="X4">X4</option>
                    <option label="X5" value="X5">X5</option>
                    <option label="X6" value="X6">X6</option>
                    <option label="X7" value="X7">X7</option>
                    <option label="Z4" value="Z4">Z4</option>
            </React.Fragment>)
        break;
        case 'Bugatti':
        return (<React.Fragment>
                   <option disabled selected value=''> -- Not Available -- </option>


            </React.Fragment>)
        break;
        case 'Buick':
        return  (<React.Fragment>
                     <option disabled selected value=''> -- select an option -- </option>
                    <option label="Enclave" value="Enclave">Enclave</option>
                    <option label="Encore" value="Encore">Encore</option>
                    <option label="Encore GX" value="Encore GX">Encore GX</option>
                    <option label="Envision" value="Envision">Envision</option>
                    <option label="Regal" value="Regal">Regal</option>
                    <option label="Regal TourX" value="Regal TourX">Regal TourX</option>
            </React.Fragment>)
        break;
        case 'Cadillac':
        return (<React.Fragment>
                     <option disabled selected value=''> -- select an option -- </option>
                    <option label="CT4" value="CT4">CT4</option>
                    <option label="CT5" value="CT5">CT5</option>
                    <option label="CT6" value="CT6">CT6</option>
                    <option label="Escalade" value="Escalade">Escalade</option>
                    <option label="XT4" value="XT4">XT4</option>
                    <option label="XT5" value="XT5">XT5</option>
                    <option label="XT6" value="XT6">XT6</option>
            </React.Fragment>)
        break;
        case 'Chevrolet':
        return (<React.Fragment>
                     <option disabled selected value=''> -- select an option -- </option>
                    <option label="Blazer" value="Blazer">Blazer</option>
                    <option label="Bolt" value="Bolt">Bolt</option>
                    <option label="Camaro" value="Camaro">Camaro</option>
                    <option label="Colorado" value="Colorado">Colorado</option>
                    <option label="Corvette" value="Corvette">Corvette</option>
                    <option label="Equinox" value="Equinox">Equinox</option>
                    <option label="Express" value="Express">Express</option>
                    <option label="Impala" value="Impala">Impala</option>
                    <option label="Malibu" value="Malibu">Malibu</option>
                    <option label="Silverado 1500" value="Silverado 1500">Silverado 1500</option>
                    <option label="Silverado 2500HD" value="Silverado 2500HD">Silverado 2500HD</option>
                    <option label="Silverado 3500HD" value="Silverado 3500HD">Silverado 3500HD</option>
                    <option label="Sonic" value="Sonic">Sonic</option>
                    <option label="Spark" value="Spark">Spark</option>                    
                    <option label="Suburban" value="Suburban">Suburban</option>
                    <option label="Tahoe" value="Tahoe">Tahoe</option>     
                    <option label="TrailBlazer" value="TrailBlazer">TrailBlazer</option>  
                    <option label="Traverse" value="Traverse">Traverse</option> 
                    <option label="Trax" value="Trax">Trax</option>                    
            </React.Fragment>)
        break;
        case 'Chrysler':
        return (<React.Fragment>
                     <option disabled selected value=''> -- select an option -- </option>
                    <option label="300" value="300">300</option>  
                    <option label="Pacifica" value="Pacifica">Pacifica</option> 
                    <option label="Voyager" value="Voyager">Voyager</option> 
            </React.Fragment>)
        break;
        case 'Dodge':
        return (<React.Fragment>
                     <option disabled selected value=''> -- select an option -- </option>
                    <option label="Challenger" value="Challenger">Challenger</option>  
                    <option label="Charger" value="Charger">Charger</option> 
                    <option label="Durango" value="Durango">Durango</option> 
                    <option label="Grand Caravan" value="Grand Caravan">Grand Caravan</option> 
                    <option label="Journey" value="Journey">Journey</option> 
            </React.Fragment>)
        break;
        case 'Ferrari':
        return (<React.Fragment>
                 <option disabled selected value=''> -- Not Available -- </option>

            </React.Fragment>)
        break;
        case 'FIAT':
        return (<React.Fragment>
                     <option disabled selected value=''> -- select an option -- </option>
                    <option label="124" value="124">124</option> 
                    <option label="500L" value="500L">500L</option>  
                    <option label="500X" value="500X">500X</option>  
            </React.Fragment>)
        break;
        case 'Ford':
        return (<React.Fragment>
                     <option disabled selected value=''> -- select an option -- </option>
                    <option label="EcoSport" value="EcoSport">EcoSport</option> 
                    <option label="Edge" value="Edge">Edge</option> 
                    <option label="Escape" value="Escape">Escape</option> 
                    <option label="Expedition" value="Expedition">Expedition</option> 
                    <option label="Explorer" value="Explorer">Explorer</option> 
                    <option label="F-150" value="F-150">F-150</option> 
                    <option label="F-250" value="F-250">F-250</option> 
                    <option label="F-350" value="F-350">F-350</option> 
                    <option label="Fusion" value="Fusion">Fusion</option> 
                    <option label="Mustang" value="Mustang">Mustang</option> 
                    <option label="Mustang Mach-E" value="Mustang Mach-E">Mustang Mach-E</option> 
                    <option label="Ranger" value="Ranger">Ranger</option> 
                    <option label="Transit" value="Transit">Transit</option> 
                    <option label="Transit  Connect" value="Transit Connect">Transit Connect</option> 
            </React.Fragment>)
        break;
        case 'Genesis':
        return (<React.Fragment>
                     <option disabled selected value=''> -- select an option -- </option>
                    <option label="G70" value="G70">G70</option> 
                    <option label="G80" value="G80">G80</option> 
                    <option label="G90" value="G90">G90</option> 
                    <option label="GV80" value="GV80">GV80</option> 
            </React.Fragment>)
        break;
        case 'GMC':
        return (<React.Fragment>
                <option disabled selected value=''> -- select an option -- </option>
                <option label="Acadia" value="Acadia">Acadia</option> 
                <option label="Canyon" value="Canyon">Canyon</option> 
                <option label="Savana" value="Savana">Savana</option> 
                <option label="Sierra 1500" value="Sierra 1500">Sierra 1500</option> 
                <option label="Sierra 2500HD" value="Sierra 2500HD">Sierra 2500HD</option> 
                <option label="Sierra 3500HD" value="Sierra 3500HD">Sierra 3500HD</option> 
                <option label="Terrain" value="Terrain">Terrain</option> 
                <option label="Yukon" value="Yukon">Yukon</option> 
                <option label="Yukon XL" value="Yukon XL">Yukon XL</option> 
            </React.Fragment>)
        break;
        case 'Honda':
        return (<React.Fragment>
                <option disabled selected value=''> -- select an option -- </option>
                <option label="Accord" value="Accord">Accord</option> 
                <option label="Civic" value="Civic">Civic</option> 
                <option label="Clarity" value="Clarity">Clarity</option> 
                <option label="CR-V" value="CR-V">CR-V</option> 
                <option label="Fit" value="Fit">Fit</option> 
                <option label="HR-V" value="HR-V">HR-V</option> 
                <option label="Insight" value="Insight">Insight</option> 
                <option label="Odyssey" value="Odyssey">Odyssey</option> 
                <option label="Passport" value="Passport">Passport</option> 
                <option label="Pilot" value="Pilot">Pilot</option> 
                <option label="Ridgeline" value="Ridgeline">Ridgeline</option> 
            </React.Fragment>)
        break;
        case 'Hyundai':
        return (<React.Fragment>
                <option disabled selected value=''> -- select an option -- </option>
                <option label="Accent" value="Accent">Accent</option> 
                <option label="Elantra" value="Elantra">Elantra</option> 
                <option label="Elantra GT" value="Elantra GT">Elantra GT</option> 
                <option label="Ioniq" value="Ioniq">Ioniq</option> 
                <option label="Kona" value="Kona">Kona</option>        
                <option label="Kona Electric" value="Kona Electric">Kona Electric</option>
                <option label="Nexo" value="Nexo">Nexo</option>    
                <option label="Palisade" value="Palisade">Palisade</option>
                <option label="Santa Fe" value="Santa Fe">Santa Fe</option> 
                <option label="Sonata" value="Sonata">Sonata</option> 
                <option label="Tucson" value="Tucson">Tucson</option> 
                <option label="Veloster" value="Veloster">Veloster</option> 
                <option label="Venue" value="Venue">Venue</option> 
            </React.Fragment>)
        break;
        case 'INFINITI':
        return (<React.Fragment>
                <option disabled selected value=''> -- select an option -- </option>
                <option label="Q50" value="Q50">Q50</option> 
                <option label="Q60" value="Q60">Q60</option> 
                <option label="QX50" value="QX50">QX50</option> 
                <option label="QX60" value="QX60">QX60</option> 
                <option label="QX80" value="QX80">QX80</option> 
            </React.Fragment>)
        break;
        case 'Jaguar':
        return (<React.Fragment>
                <option disabled selected value=''> -- select an option -- </option>
                <option label="E-Pace" value="E-Pace">E-Pace</option> 
                <option label="F-Pace" value="F-Pace">F-Pace</option> 
                <option label="F-Type" value="F-Type">F-Type</option> 
                <option label="I-Pace" value="I-Pace">I-Pace</option> 
                <option label="XE" value="XE">XE</option> 
                <option label="XF" value="XF">XF</option> 
            </React.Fragment>)
        break;
        case 'Jeep':
        return (<React.Fragment>
                 <option disabled selected value=''> -- select an option -- </option>
                <option label="Cherokee" value="Cherokee">Cherokee</option> 
                <option label="Compass" value="Compass">Compass</option> 
                <option label="Gladiator" value="Gladiator">Gladiator</option> 
                <option label="Grand Cherokee" value="Grand Cherokee">Grand Cherokee</option> 
                <option label="Renegade" value="Renegade">Renegade</option> 
                <option label="Wrangler" value="Wrangler">Wrangler</option> 
            </React.Fragment>)
        break;
        case 'Karma':
        return (<React.Fragment>
                 <option disabled selected value=''> -- Not Available -- </option>

            </React.Fragment>)
        break;
        case 'Kia':
        return (<React.Fragment>
                <option disabled selected value=''> -- select an option -- </option>
                <option label="Cadenza" value="Cadenza">Cadenza</option> 
                <option label="Forte" value="Forte">Forte</option> 
                <option label="K900" value="K900">K900</option> 
                <option label="Niro" value="Niro">Niro</option> 
                <option label="Niro Electric" value="Niro Electric">Niro Electric</option> 
                <option label="Optima" value="Optima">Optima</option> 
                <option label="Rio" value="Rio">Rio</option> 
                <option label="Sedona" value="Sedona">Sedona</option> 
                <option label="Seltos" value="Seltos">Seltos</option> 
                <option label="Sorento" value="Sorento">Sorento</option> 
                <option label="Soul" value="Soul">Soul</option> 
                <option label="Sportage" value="Sportage">Sportage</option> 
                <option label="Stinger" value="Stinger">Stinger</option> 
                <option label="Telluride" value="Telluride">Telluride</option> 
            </React.Fragment>)
        break;
        case 'Lamborghini':
        return (<React.Fragment>
                 <option disabled selected value=''> -- Not Available -- </option>

            </React.Fragment>)
        break;
        case 'Land Rover':
        return (<React.Fragment>
                <option disabled selected value=''> -- select an option -- </option>
                <option label="Defender" value="Defender">Defender</option> 
                <option label="Discovery" value="Discovery">Discovery</option> 
                <option label="Discovery Sport" value="Discovery Sport">Discovery Sport</option> 
                <option label="Range Rover" value="Range Rover">Range Rover</option> 
                <option label="Range Rover Evoque" value="Range Rover Evoque">Range Rover Evoque</option> 
                <option label="Range Rover Sport" value="Range Rover Sport">Range Rover Sport</option> 
                <option label="Range Rover Velar" value="Range Rover Velar">Range Rover Velar</option> 
            </React.Fragment>)
        break;
        case 'Lexus':
        return (<React.Fragment>
                <option disabled selected value=''> -- select an option -- </option>
                <option label="ES" value="ES">ES</option> 
                <option label="GS" value="GS">GS</option> 
                <option label="GX" value="GX">GX</option> 
                <option label="IS" value="IS">IS</option> 
                <option label="LC" value="LC">LC</option> 
                <option label="LS" value="LS">LS</option> 
                <option label="LX" value="LX">LX</option> 
                <option label="NX" value="NX">NX</option> 
                <option label="RC" value="RC">RC</option> 
                <option label="RX" value="RX">RX</option> 
                <option label="RX L" value="RX L">RX L</option> 
                <option label="UX" value="UX">UX</option> 
            </React.Fragment>)
        break;
        case 'Lincoln':
        return (<React.Fragment>
                <option disabled selected value=''> -- select an option -- </option>
                <option label="Aviator" value="Aviator">Aviator</option> 
                <option label="Continental" value="Continental">Continental</option>
                <option label="Corsair" value="Corsair">Corsair</option> 
                <option label="MKZ" value="MKZ">MKZ</option> 
                <option label="Nautilus" value="Nautilus">Nautilus</option> 
                <option label="Navigator" value="Navigator">Navigator</option> 
            </React.Fragment>)
        break;
        case 'Lotus':
        return (<React.Fragment>
                 <option disabled selected value=''> -- Not Available -- </option>

            </React.Fragment>)
        break;
        case 'Maserati':
        return (<React.Fragment>
                <option disabled selected value=''> -- select an option -- </option>
                <option label="Ghibli" value="Ghibli">Ghibli</option> 
                <option label="Levante" value="Levante">Levante</option> 
                <option label="Quattroporte" value="Quattroporte">Quattroporte</option> 
            </React.Fragment>)
        break;
        case 'Mazda':
        return (<React.Fragment>
                <option disabled selected value=''> -- select an option -- </option>
                <option label="3" value="3">3</option> 
                <option label="6" value="6">6</option> 
                <option label="CX-3" value="CX-3">CX-3</option> 
                <option label="CX-30" value="CX-30">CX-30</option> 
                <option label="CX-5" value="CX-5">CX-5</option> 
                <option label="CX-9" value="CX-9">CX-9</option> 
                <option label="MX-5" value="MX-5">MX-5</option> 
            </React.Fragment>)
        break;
        case 'Mclaren':
        return (<React.Fragment>
                 <option disabled selected value=''> -- Not Available -- </option>

            </React.Fragment>)
        break;
        case 'Mercedes-Benz':
        return (<React.Fragment>
                <option disabled selected value=''> -- select an option -- </option>
                <option label="A-Class" value="A-Class">A-Class</option> 
                <option label="AMG GT" value="AMG GT">AMG GT</option> 
                <option label="C-Class" value="C-Class">C-Class</option> 
                <option label="CLA" value="CLA">CLA</option> 
                <option label="CLS" value="CLS">CLS</option> 
                <option label="E-Class" value="E-Class">E-Class</option> 
                <option label="EQC" value="EQC">EQC</option> 
                <option label="G-Class" value="G-Class">G-Class</option> 
                <option label="GLA" value="GLA">GLA</option> 
                <option label="GLB" value="GLB">GLB</option> 
                <option label="GLC" value="GLC">GLC</option> 
                <option label="GLC Coupe" value="GLC Coupe">GLC Coupe</option> 
                <option label="GLE" value="GLE">GLE</option> 
                <option label="GLS" value="GLS">GLS</option> 
                <option label="Metris" value="Metris">Metris</option> 
                <option label="S-Class" value="S-Class">S-Class</option> 
                <option label="SL" value="SL">SL</option> 
                <option label="SLC" value="SLC">SLC</option> 
                <option label="Sprinter" value="Sprinter">Sprinter</option> 
            </React.Fragment>)
        break;
        case 'MINI':
        return (<React.Fragment>
                <option disabled selected value=''> -- select an option -- </option>
                <option label="Cooper" value="Cooper">Cooper</option> 
                <option label="Cooper Clubman" value="Cooper Clubman">Cooper Clubman</option> 
                <option label="Cooper Countryman" value="Cooper Countryman">Cooper Countryman</option> 
            </React.Fragment>)
        break;
        case 'Mitsubishi':
        return (<React.Fragment>
                <option disabled selected value=''> -- select an option -- </option>
                <option label="Eclipse Cross" value="Eclipse Cross">Eclipse Cross</option> 
                <option label="Mirage" value="Mirage">Mirage</option> 
                <option label="Outlander" value="Outlander">Outlander</option>
                <option label="Outlander Sport" value="Outlander Sport">Outlander Sport</option> 
 


            </React.Fragment>)
        break;
        case 'Nissan':
        return (<React.Fragment>
                <option disabled selected value=''> -- select an option -- </option>
                <option label="Altima" value="Altima">Altima</option> 
                <option label="Armada" value="Armada">Armada</option> 
                <option label="Frontier" value="Frontier">Frontier</option> 
                <option label="GT-R" value="GT-R">GT-R</option> 
                <option label="Kicks" value="Kicks">Kicks</option> 
                <option label="Leaf" value="Leaf">Leaf</option> 
                <option label="Maxima" value="Maxima">Maxiam</option> 
                <option label="Murano" value="Murano">Murano</option> 
                <option label="NV" value="NV">NV</option> 
                <option label="NV200" value="NV200">NV200</option> 
                <option label="Pathfinder" value="Pathfinder">Pathfinder</option> 
                <option label="Rogue" value="Rogue">Rogue</option> 
                <option label="Rogue Sport" value="Rogue Sport">Rogue Sport</option> 
                <option label="Sentra" value="Sentra">Sentra</option> 
                <option label="Titan" value="Titan">Titan</option> 
                <option label="Titan XD" value="Titan XD">Titan XD</option> 
                <option label="Versa" value="Versa">Versa</option> 
                <option label="Z" value="Z">Z</option> 
            </React.Fragment>)
        break;
        case 'Pagani':
        return (<React.Fragment>
                 <option disabled selected value=''> -- Not Available -- </option>

            </React.Fragment>)
        break;
        case 'Porsche':
        return (<React.Fragment>
                <option disabled selected value=''> -- select an option -- </option>
                <option label="718 Boxster" value="718 Boxster">718 Boxster</option> 
                <option label="718 Cayman" value="718 Cayman">718 Cayman</option> 
                <option label="911" value="911">911</option> 
                <option label="Cayenne" value="Cayenne">Cayenne</option> 
                <option label="Cayenne Coupe" value="Cayenne Coupe">Cayenne Coupe</option> 
                <option label="Macan" value="Macan">Macan</option> 
                <option label="Panamera" value="Panamera">Panamera</option> 
                <option label="Taycan" value="Taycan">Taycan</option> 
            </React.Fragment>)
        break;
        case 'RAM':
        return (<React.Fragment>
                <option disabled selected value=''> -- select an option -- </option>
                <option label="1500" value="1500">1500</option> 
                <option label="1500 Classic" value="1500 Classic">1500 Classic</option> 
                <option label="2500" value="2500">2500</option> 
                <option label="3500" value="3500">3500</option> 
            </React.Fragment>)
        break;
        case 'Rolls-Royce':
        return (<React.Fragment>
                 <option disabled selected value=''> -- Not Available -- </option>

            </React.Fragment>)
        break;
        case 'Smart':
        return (<React.Fragment>
                 <option disabled selected value=''> -- Not Available -- </option>

            </React.Fragment>)
        break;
        case 'Subaru':
        return (<React.Fragment>
                <option disabled selected value=''> -- select an option -- </option>
                <option label="Ascent" value="Ascent">Ascent</option> 
                <option label="BRZ" value="BRZ">BRZ</option> 
                <option label="Crosstrek" value="Crosstrek">Crosstrek</option> 
                <option label="Forester" value="Forester">Forester</option> 
                <option label="Impreza" value="Impreza">Impreza</option> 
                <option label="Legacy" value="Legacy">Legacy</option> 
                <option label="Outback" value="Outback">Outback</option>
                <option label="WRX" value="WRX">WRX</option> 
            </React.Fragment>)
        break;
        case 'Tesla':
        return (<React.Fragment>
                <option disabled selected value=''> -- select an option -- </option>
                <option label="Cybertruck" value="Cybertruck">Cybertruck</option> 
                <option label="Model 3" value="Model 3">Model 3</option> 
                <option label="Model S" value="Model S">Model S</option> 
                <option label="Model X" value="Model X">Model X</option> 
                <option label="Model Y" value="Model Y">Model Y</option> 
                <option label="Roadster" value="Roadster">Roadster</option> 
            </React.Fragment>)
        break;
        case 'Toyota':
        return (<React.Fragment>
                <option disabled selected value=''> -- select an option -- </option>
                <option label="4Runner" value="4Runner">4Runner</option> 
                <option label="86" value="86">86</option> 
                <option label="Avalon" value="Avalon">Avalon</option> 
                <option label="C-HR" value="C-HR">C-HR</option> 
                <option label="Camry" value="Camry">Camry</option> 
                <option label="Corolla" value="Corolla">Corolla</option> 
                <option label="Corolla Hatchback" value="Corolla Hatchback">Corolla Hatchback</option> 
                <option label="Highlander" value="Highlander">Highlander</option> 
                <option label="Land Cruiser" value="Land Cruiser">Land Cruiser</option>
                <option label="Mirai" value="Mirai">Mirai</option> 
                <option label="Prius" value="Prius">Prius</option> 
                <option label="Prius Prime" value="Prius Prime">Prius Prime</option> 
                <option label="RAV4" value="RAV4">RAV4</option> 
                <option label="RAV4 Prime" value="RAV4 Prime">RAV4 Prime</option> 
                <option label="Sequoia" value="Sequoia">Sequoia</option>
                <option label="Sienna" value="Sienna">Sienna</option> 
                <option label="Supra" value="Supra">Supra</option> 
                <option label="Tacoma" value="Tacoma">Tacoma</option> 
                <option label="Tundra" value="Tundra">Tundra</option> 
                <option label="Venza" value="Venza">Venza</option> 
                <option label="Yaris" value="Yaris">Yaris</option> 
                <option label="Yaris Hatchaback" value="Yaris Hatchback">Yaris Hatchback</option> 
            </React.Fragment>)
        break;
        case 'Volkswagen':
        return (<React.Fragment>
                <option disabled selected value=''> -- select an option -- </option>
                <option label="Arteon" value="Arteon">Arteon</option> 
                <option label="Atlas" value="Atlas">Atlas</option> 
                <option label="Atlas Cross Sport" value="Atlas Cross Sport">Atlas Cross Sport</option> 
                <option label="Golf" value="Golf">Golf</option> 
                <option label="GTI" value="GTI">GTI</option> 
                <option label="Jetta" value="Jetta">Jetta</option> 
                <option label="Passat" value="Passat">Passat</option> 
                <option label="Tiguan" value="Tiguan">Tiguan</option> 
            </React.Fragment>)
        break;
        case 'Volvo':
        return (<React.Fragment>
                <option disabled selected value=''> -- select an option -- </option>
                <option label="S60" value="S60">S60</option> 
                <option label="S90" value="S90">S90</option> 
                <option label="V60" value="V60">V60</option> 
                <option label="V90" value="V90">V90</option> 
                <option label="XC40" value="XC40">XC40</option> 
                <option label="XC60" value="XC60">XC60</option> 
                <option label="XC90" value="XC90">XC90</option> 
            </React.Fragment>)
        break;
  
      default:
         return (<React.Fragment>  <option disabled selected value=''> -- select a make -- </option></React.Fragment>)
          break;
 
  }
}

let model = switch_statement()
    return (
        <React.Fragment>
            {model}
        </React.Fragment>
    )
}
  