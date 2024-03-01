import React from "react";

const Demo = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-r">Column 1</th>
            <th className="py-2 px-4 border-r">Column 2</th>
            <th className="py-2 px-4 border-r">Column 3</th>
            <th className="py-2 px-4 border-r">Column 4</th>
            <th className="py-2 px-4 border-r">Column 5</th>
            <th className="py-2 px-4 border-r">Column 6</th>
            <th className="py-2 px-4 border-r">Column 7</th>
            <th className="py-2 px-4 border-r">Column 8</th>
            <th className="py-2 px-4 border-r">Column 9</th>
            <th className="py-2 px-4">Column 10</th>
          </tr>
        </thead>
        <tbody>
          {/* Add your table rows here */}
          <tr className="border-t">
            <td className="py-2 px-4 border-r">Data 1</td>
            <td className="py-2 px-4 border-r">Data 2</td>
            <td className="py-2 px-4 border-r">Data 3</td>
            <td className="py-2 px-4 border-r">Data 4</td>
            <td className="py-2 px-4 border-r">Data 5</td>
            <td className="py-2 px-4 border-r">Data 6</td>
            <td className="py-2 px-4 border-r">Data 7</td>
            <td className="py-2 px-4 border-r">Data 8</td>
            <td className="py-2 px-4 border-r">Data 9</td>
            <td className="py-2 px-4">Data 10</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Demo;
