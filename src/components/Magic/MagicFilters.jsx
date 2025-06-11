function MagicFilters({ filters, handleFilterName, handleFilterHouse, handleFilterBlood, handleFilterReset }) {

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
                <div className="selects">
                    <select
                        className="info infoBL"
                        name="filterHouse"
                        id="filterHouse"
                        value={filters.house}
                        onInput={handleFilterHouse}
                    >
                        <option value="">HOUSES</option>
                        <option className="option_icon" value="Gryffindor">🦁</option>
                        <option className="option_icon" value="Ravenclaw">🦅</option>
                        <option className="option_icon" value="Slytherin">🐍</option>
                        <option className="option_icon" value="Hufflepuff">🦡</option>
                    </select>

                    <select
                        className="info infoBR"
                        name="filterBlood"
                        id="filterBlood"
                        value={filters.ancestry}
                        onInput={handleFilterBlood}
                    >
                        <option value="">BLOOD</option>
                        <option value="pure-blood">Pureblood</option>
                        <option value="half-blood">Mestiza</option>
                        <option value="muggleborn">Mudblood</option>
                    </select>
                </div>
            </form>
            <button
                className='infoNO'
                name='filterReset'
                id='filterReset'
                type='button'
                onClick={handleFilterReset}
            >⭮
            </button>

        </div>
    )
}
export default MagicFilters;