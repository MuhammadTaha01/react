import Table from 'react-bootstrap/Table';
import '../comCSS/zoneInfoTable.css' // Import your custom CSS if needed

function ImaginaryDataExample() {
  const alienData = [
    { id: 1, species: 'Chitinous Swarm (insectoid hive mind)', area: 'Southern wastelands (resource-rich mining hubs)' },
    { id: 2, species: 'Psionic Brain-Stealers (telepathic parasites)', area: 'Eastern Plains (major agricultural zones)' },
    { id: 3, species: 'Crystalline Aberrations (sentient crystals)', area: 'Crystaline Spires mountain range (natural energy sources)' },
    { id: 4, species: 'Vile Spore-Minders (fungal network)', area: 'Subterranean Tunnels (ancient ruins, potential for bioweapons)' },
    { id: 5, species: 'Cybernetic Horrors (machine intelligence)', area: 'Major Cities (Neohaven, Novaport) - partial control' },
    { id: 6, species: 'Telepathic Mimics (shape-shifting infiltrators)', area: 'Coastal regions (key trade routes and fishing grounds)' },
    { id: 7, species: 'Psychic Blood-Drainers (energy vampires)', area: 'Scattered settlements (using psychic influence for dominance)' },
    { id: 8, species: 'Shapeshifting Stalkers (amorphous predators)', area: 'Uncharted wilderness (hunting grounds and resource scouting)' },
    { id: 9, species: 'Symbiotic Parasites (take control of flora and fauna)', area: 'Hackunia\'s forests (gaining control over vegetation)' },
    { id: 10, species: 'Temporal Manipulators (warping time and space)', area: 'Temporal anomalies (disrupting communication and travel)' },
  ];

  return (
    <div className="zoneContainer">
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Alien Species</th>
            <th>Captured Areas of Hackunia</th>
          </tr>
        </thead>
        <tbody>
          {alienData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.species}</td>
              <td>{data.area}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ImaginaryDataExample;