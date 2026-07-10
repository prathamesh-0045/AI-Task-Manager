function StatsCards({

    total,

    completed,

    pending,

    high

}) {

    return (

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-6">

            <div className="bg-blue-600 text-white rounded-xl p-5 shadow-lg">

                <h3 className="text-lg">📋 Total</h3>

                <h1 className="text-3xl font-bold">
                    {total}
                </h1>

            </div>

            <div className="bg-green-600 text-white rounded-xl p-5 shadow-lg">

                <h3 className="text-lg">✅ Completed</h3>

                <h1 className="text-3xl font-bold">
                    {completed}
                </h1>

            </div>

            <div className="bg-yellow-500 text-white rounded-xl p-5 shadow-lg">

                <h3 className="text-lg">⏳ Pending</h3>

                <h1 className="text-3xl font-bold">
                    {pending}
                </h1>

            </div>

            <div className="bg-red-600 text-white rounded-xl p-5 shadow-lg">

                <h3 className="text-lg">🔥 High Priority</h3>

                <h1 className="text-3xl font-bold">
                    {high}
                </h1>

            </div>

        </div>

    );

}

export default StatsCards;