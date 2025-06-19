'use client';

export default function SizeGuidePage() {
  return (
    <main className="flex flex-col gap-12">
      <h1 className="text-2xl font-bold">Size Guide</h1>
      <div className="max-w-2xl">
        <p className="text-lg mb-6">
          Finding the perfect fit is essential for comfort and style. Use our size guide to ensure you get the right size for our minimalist clothing.
        </p>
        <div className="grid gap-6">
          <div className="p-6 border border-solid border-border-primary rounded-lg">
            <h2 className="text-xl font-semibold mb-4">How to Measure</h2>
            <div className="grid gap-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">1</span>
                <p>Measure your chest at the widest point</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">2</span>
                <p>Measure your waist at the natural waistline</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">3</span>
                <p>Measure your inseam from crotch to ankle</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 border border-solid border-border-primary rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Size Charts</h2>
            <div className="grid gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">T-Shirts</h3>
                <table className="w-full border border-solid border-border-primary">
                  <thead>
                    <tr className="bg-black">
                      <th className="p-2">Size</th>
                      <th className="p-2">Chest (cm)</th>
                      <th className="p-2">Length (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border border-solid border-border-primary">S</td>
                      <td className="p-2 border border-solid border-border-primary">92-96</td>
                      <td className="p-2 border border-solid border-border-primary">69</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-solid border-border-primary">M</td>
                      <td className="p-2 border border-solid border-border-primary">98-102</td>
                      <td className="p-2 border border-solid border-border-primary">71</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-solid border-border-primary">L</td>
                      <td className="p-2 border border-solid border-border-primary">104-108</td>
                      <td className="p-2 border border-solid border-border-primary">73</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-solid border-border-primary">XL</td>
                      <td className="p-2 border border-solid border-border-primary">110-114</td>
                      <td className="p-2 border border-solid border-border-primary">75</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Pants</h3>
                <table className="w-full border border-solid border-border-primary">
                  <thead>
                    <tr className="bg-black">
                      <th className="p-2">Size</th>
                      <th className="p-2">Waist (cm)</th>
                      <th className="p-2">Inseam (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border border-solid border-border-primary">S</td>
                      <td className="p-2 border border-solid border-border-primary">76-80</td>
                      <td className="p-2 border border-solid border-border-primary">76</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-solid border-border-primary">M</td>
                      <td className="p-2 border border-solid border-border-primary">82-86</td>
                      <td className="p-2 border border-solid border-border-primary">78</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-solid border-border-primary">L</td>
                      <td className="p-2 border border-solid border-border-primary">88-92</td>
                      <td className="p-2 border border-solid border-border-primary">80</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-solid border-border-primary">XL</td>
                      <td className="p-2 border border-solid border-border-primary">94-98</td>
                      <td className="p-2 border border-solid border-border-primary">82</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
