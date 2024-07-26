import React from "react";
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
  gaugeClasses,
} from "@mui/x-charts/Gauge";

function GaugePointer() {
  const { value, valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  // تحديد اللون بناءً على القيمة
  const color = value < 50 ? "red" : value < 75 ? "orange" : "green";

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };

  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill={color} />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke={color}
        strokeWidth={5}
      />
    </g>
  );
}

export default function CompositionExample({props}) {
  const value = 80;

  const color = value < 50 ? "red" : value < 75 ? "orange" : "green";

  return (
    <GaugeContainer
      width={300}
      height={200}
      startAngle={-110}
      endAngle={110}
      value={value}
    >
      <GaugeReferenceArc />
      <GaugeValueArc />
      <GaugePointer />
    </GaugeContainer>
  );
}

// sx={(theme) => ({
//   [`& .${gaugeClasses.valueArc}`]: {
//     fill: `red`
//   }
// })}
