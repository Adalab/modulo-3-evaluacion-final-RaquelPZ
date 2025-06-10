function MagicFilters({ filters, handleFilterName, handleFilterHouse, handleFilterBlood }) {

    return (
        <div className='filter'>

            <form onSubmit={ev => ev.preventDefault()}>
                <input
                    className="info infoT"
                    type="text"
                    placeholder='NAME OF THE WITCH'
                    id='filterName'
                    name='filterName'
                    value={filters.name}
                    onInput={handleFilterName}
                />
            </form>

            <select
                className="info infoBL"
                name="filterHouse"
                id="filterHouse"
                value={filters.house}
                onInput={handleFilterHouse}
            >
                <option value="">HOUSES</option>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Ravenclaw">Ravenclaw</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Hufflepuff">Hufflepuff</option>
            </select>

            <select 
                className="info infoBR"
                name="filterBlood"
                id="filterBlood"
                value={filters.ancestry}
                onInput={handleFilterBlood}
            >
                <option value="">BLOOD</option>
                <option value="pure-blood">Limpia</option>
                <option value="half-blood">Mestiza</option>
                <option value="muggleborn">Pureblood</option>
                <option value="others">Others</option>
            </select>

        </div>
    )
}
export default MagicFilters;