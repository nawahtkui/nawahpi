// src/components/Tokenomics.jsx
import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Public Sale", value: 50 },
  { name: "Team & Advisors", value: 20 },
  { name: "Marketing & Partnerships", value: 15 },
  { name: "Community Rewards", value: 10 },
  { name: "Reserve", value: 5 },
];

const COLORS = ["#4CAF50", "#FFD700", "#FF9800", "#2196F3", "#9C27B0"];

function Tokenomics() {
  return (
    <section className="tokenomics-section">
      <h2>Tokenomics</h2>
      <p>Total Supply: 100,000,000 NWTK</p>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}      // ✅ تفعيل الأنيميشن
              animationDuration={1500}      // مدة الأنيميشن (1.5 ثانية)
              animationBegin={0}            // يبدأ فورًا
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default Tokenomics;
