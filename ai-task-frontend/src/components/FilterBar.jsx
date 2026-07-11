function FilterBar({

    statusFilter,
    setStatusFilter,

    priorityFilter,
    setPriorityFilter

}) {

    return (

        <div className="grid md:grid-cols-2 gap-4">

            <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border rounded-lg p-3"
            >

                <option value="">All Status</option>

                <option value="TODO">TODO</option>

                <option value="IN_PROGRESS">IN_PROGRESS</option>

                <option value="DONE">DONE</option>

            </select>

            <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="border rounded-lg p-3"
            >

                <option value="">All Priority</option>

                <option value="LOW">LOW</option>

                <option value="MEDIUM">MEDIUM</option>

                <option value="HIGH">HIGH</option>

            </select>

        </div>

    );

}

export default FilterBar;