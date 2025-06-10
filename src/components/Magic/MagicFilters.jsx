function MagicFilters({ filters, handleFilterName, handleFilterHouse, handleFilterBlood }) {

    return (
        <div className='filter'>
            <form onSubmit={ev => ev.preventDefault()}>
                <input
                    type="text"
                    placeholder='Nombre de la bruja'
                    id='filterName'
                    name='filterName'
                    value={filters.name}
                    onInput={handleFilterName}
                />
            </form>
            <select
                name="filterHouse"
                id="filterHouse"
                value={filters.house}
                onInput={handleFilterHouse}
            >
                <option value="">All houses</option>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Ravenclaw">Ravenclaw</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Hufflepuff">Hufflepuff</option>
            </select>
            <select
                name="filterBlood"
                id="filterBlood"
                value={filters.ancestry}
                onInput={handleFilterBlood}
            >
                <option value="">All blood</option>
                <option value="pure-blood">Limpia</option>
                <option value="half-blood">Mestiza</option>
                <option value="muggleborn">Sucia</option>
                <option value="others">Otras</option>
            </select>
        </div>
    )
}
export default MagicFilters;