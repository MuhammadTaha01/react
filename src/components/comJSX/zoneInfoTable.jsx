import Table from 'react-bootstrap/Table';
import '../comCSS/zoneInfoTable.css' // Import your custom CSS if needed

function ImaginaryDataExample() {
  return (
    <div className="zoneContainer">
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Destroyed Cities</th>
            <th>Safe Cities</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>**Estimated Civilian Casualties**</td>
            <td>High</td>
            <td>Minimal</td>
          </tr>
          <tr>
            <td>**Estimated Hackunia Military Casualties**</td>
            <td>Moderate</td>
            <td>Low</td>
          </tr>
          <tr>
            <td>**Estimated Alien Casualties**</td>
            <td>Heavy</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>**Alien Encounters**</td>
            <td>Frequent</td>
            <td>None Reported</td>
          </tr>
          <tr>
            <td>**Dominant Alien Species**</td>
            <td>Zarkon Brood (insectoid)</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>**Alien Technology Recovered**</td>
            <td>Limited (mostly weaponry)</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>**Hackunia Military Strength**</td>
            <td>Significantly depleted</td>
            <td>High</td>
          </tr>
          <tr>
            <td>**Civilian Evacuation Efforts**</td>
            <td>Partially successful (many stranded)</td>
            <td>Highly successful</td>
          </tr>
          <tr>
            <td>**Major Cities Lost**</td>
            <td>Neohaven, Novaport, Astrareach, Cosmopolis</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>**Hackunia's Remaining Defenses**</td>
            <td>Orbital defense grid (partially operational)</td>
            <td>Advanced shield technology</td>
          </tr>
          <tr>
            <td>**Alien Invasion Motives**</td>
            <td>Planetary conquest suspected</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>**Intergalactic Communication Established**</td>
            <td>No</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>**Estimated Time for Recovery**</td>
            <td>Decades</td>
            <td>Minimal</td>
          </tr>
          <tr>
            <td>**Global Morale**</td>
            <td>Severely shaken</td>
            <td>High</td>
          </tr>
          <tr>
            <td>**Hackunia's Leadership Status**</td>
            <td>Uncertain (many key figures missing)</td>
            <td>Stable</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ImaginaryDataExample;
