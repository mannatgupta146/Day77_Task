import React from "react";

const Card = ({ pokemon }) => {
  return (
    <div className="w-72 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition">
      <div className="p-4">

        {/* Image */}
        <div className="bg-gray-100 rounded-xl flex justify-center">
          <img
            src={pokemon.sprites.other.home.front_default}
            alt={pokemon.name}
            className="w-36 h-36"
          />
        </div>

        {/* Name */}
        <h2 className="text-xl font-bold text-center capitalize mt-3">
          {pokemon.name}
        </h2>

        {/* Types */}
        <div className="flex justify-center gap-2 mt-2">
          {pokemon.types.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-700 font-semibold"
            >
              {t.type.name}
            </span>
          ))}
        </div>

        {/* Abilities */}
        <div className="mt-3">
          <p className="text-sm font-semibold text-gray-600">Abilities</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {pokemon.abilities.map((a, i) => (
              <span
                key={i}
                className="text-xs bg-gray-100 px-2 py-1 rounded-md capitalize"
              >
                {a.ability.name}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-4 space-y-2 text-sm">
          {pokemon.stats.slice(0, 3).map((s, i) => (
            <div key={i}>
              <div className="flex justify-between">
                <span className="capitalize">{s.stat.name}</span>
                <span className="font-semibold">{s.base_stat}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gray-700 h-2 rounded-full"
                  style={{ width: `${s.base_stat / 2}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Card;
