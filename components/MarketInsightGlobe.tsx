"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import Globe from "react-globe.gl";

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function MarketInsightGlobe() {
  const globeEl = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ width: 700, height: 700 });

  // Generate paths distributed globally based on population density
  const pathsData = useMemo(() => {
    // Population density regions across the world
    const populationRegions = [
      // Asia - High density
      { lat: 35, lng: 135, density: 10, region: "Japan" },
      { lat: 31, lng: 121, density: 15, region: "Eastern China" },
      { lat: 39, lng: 116, density: 12, region: "Northern China" },
      { lat: 22, lng: 114, density: 8, region: "Southern China" },
      { lat: 28, lng: 77, density: 18, region: "Northern India" },
      { lat: 13, lng: 77, density: 12, region: "Southern India" },
      { lat: 23, lng: 90, density: 14, region: "Bangladesh" },
      { lat: 14, lng: 121, density: 8, region: "Philippines" },
      { lat: -6, lng: 107, density: 9, region: "Java, Indonesia" },
      { lat: 37, lng: 127, density: 7, region: "South Korea" },
      { lat: 21, lng: 106, density: 6, region: "Vietnam" },
      { lat: 14, lng: 100, density: 5, region: "Thailand" },
      
      // Europe - Medium to high density
      { lat: 51, lng: 0, density: 6, region: "UK" },
      { lat: 49, lng: 2, density: 5, region: "France" },
      { lat: 51, lng: 10, density: 7, region: "Germany" },
      { lat: 45, lng: 12, density: 4, region: "Italy" },
      { lat: 40, lng: -4, density: 3, region: "Spain" },
      { lat: 52, lng: 20, density: 3, region: "Poland" },
      { lat: 56, lng: 38, density: 4, region: "Russia West" },
      { lat: 41, lng: 29, density: 5, region: "Turkey" },
      
      // North America - Medium density
      { lat: 40, lng: -74, density: 6, region: "US Northeast" },
      { lat: 34, lng: -118, density: 4, region: "US West Coast" },
      { lat: 42, lng: -87, density: 3, region: "US Midwest" },
      { lat: 30, lng: -95, density: 3, region: "US South" },
      { lat: 45, lng: -75, density: 2, region: "Eastern Canada" },
      { lat: 19, lng: -99, density: 5, region: "Central Mexico" },
      
      // South America - Low to medium density
      { lat: -23, lng: -46, density: 6, region: "Southeast Brazil" },
      { lat: -34, lng: -58, density: 3, region: "Argentina" },
      { lat: 4, lng: -74, density: 2, region: "Colombia" },
      
      // Africa - Variable density
      { lat: 6, lng: 3, density: 8, region: "Nigeria" },
      { lat: 30, lng: 31, density: 4, region: "Egypt" },
      { lat: -26, lng: 28, density: 3, region: "South Africa" },
      { lat: -1, lng: 37, density: 2, region: "East Africa" },
      
      // Middle East
      { lat: 35, lng: 51, density: 3, region: "Iran" },
      { lat: 25, lng: 55, density: 2, region: "UAE" },
      
      // Oceania - Low density
      { lat: -34, lng: 151, density: 2, region: "Australia East" },
      { lat: -37, lng: 145, density: 2, region: "Australia South" }
    ];

    const paths: any[] = [];
    
    populationRegions.forEach((region) => {
      // Number of paths based on population density
      const numPaths = region.density * 2; // More paths for higher density
      
      for (let i = 0; i < numPaths; i++) {
        const pathLength = Math.floor(Math.random() * 80) + 30;
        const path: any[] = [];
        
        // Start from random point within the region
        let lat = region.lat + (Math.random() * 2 - 1) * 3; // ±3 degrees
        let lng = region.lng + (Math.random() * 2 - 1) * 4; // ±4 degrees
        let alt = 0.001;
        
        path.push([lat, lng, alt]);
        
        // Create random paths across the region
        for (let j = 0; j < pathLength; j++) {
          // Step size inversely related to density (denser areas have more concentrated paths)
          const stepSize = Math.max(0.3, 2 - (region.density / 10));
          lat += (Math.random() * 2 - 1) * stepSize;
          lng += (Math.random() * 2 - 1) * stepSize;
          alt = 0.001; // Keep on surface
          
          path.push([lat, lng, alt]);
        }
        
        paths.push(path);
      }
    });

    return paths;
  }, []);

  useEffect(() => {
    // Function to handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({ width: 380, height: 380 });
      } else if (width < 768) {
        setDimensions({ width: 480, height: 480 });
      } else if (width < 1024) {
        setDimensions({ width: 620, height: 620 });
      } else if (width < 1280) {
        setDimensions({ width: 650, height: 650 });
      } else {
        setDimensions({ width: 700, height: 700 });
      }
    };

    // Set initial dimensions
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    if (globeEl.current) {
      // Auto-rotate the globe
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 1;
      
      // Disable user controls for a cleaner look
      globeEl.current.controls().enableZoom = false;
      globeEl.current.controls().enablePan = false;
      
      // Set initial position
      globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: 2 });
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ backgroundColor: '#fcfcfd' }}>
      <div className="w-full h-full flex items-center justify-center">
        <Globe
          ref={globeEl}
          globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-dark.jpg"
          bumpImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png"
          backgroundColor="#fcfcfd"
          showAtmosphere={true}
          atmosphereColor="#0f3460"
          atmosphereAltitude={0.1}
          pathsData={pathsData}
          
          pathColor={(pathData: any) => {
            // Get the starting point of the path to determine density
            const startLat = pathData[0][0];
            const startLng = pathData[0][1];
            
            // Find which region this path belongs to
            const populationRegions = [
              // Asia - High density
              { lat: 35, lng: 135, density: 10, region: "Japan" },
              { lat: 31, lng: 121, density: 15, region: "Eastern China" },
              { lat: 39, lng: 116, density: 12, region: "Northern China" },
              { lat: 22, lng: 114, density: 8, region: "Southern China" },
              { lat: 28, lng: 77, density: 18, region: "Northern India" },
              { lat: 13, lng: 77, density: 12, region: "Southern India" },
              { lat: 23, lng: 90, density: 14, region: "Bangladesh" },
              { lat: 14, lng: 121, density: 8, region: "Philippines" },
              { lat: -6, lng: 107, density: 9, region: "Java, Indonesia" },
              { lat: 37, lng: 127, density: 7, region: "South Korea" },
              { lat: 21, lng: 106, density: 6, region: "Vietnam" },
              { lat: 14, lng: 100, density: 5, region: "Thailand" },
              
              // Europe - Medium to high density
              { lat: 51, lng: 0, density: 6, region: "UK" },
              { lat: 49, lng: 2, density: 5, region: "France" },
              { lat: 51, lng: 10, density: 7, region: "Germany" },
              { lat: 45, lng: 12, density: 4, region: "Italy" },
              { lat: 40, lng: -4, density: 3, region: "Spain" },
              { lat: 52, lng: 20, density: 3, region: "Poland" },
              { lat: 56, lng: 38, density: 4, region: "Russia West" },
              { lat: 41, lng: 29, density: 5, region: "Turkey" },
              
              // North America - Medium density
              { lat: 40, lng: -74, density: 6, region: "US Northeast" },
              { lat: 34, lng: -118, density: 4, region: "US West Coast" },
              { lat: 42, lng: -87, density: 3, region: "US Midwest" },
              { lat: 30, lng: -95, density: 3, region: "US South" },
              { lat: 45, lng: -75, density: 2, region: "Eastern Canada" },
              { lat: 19, lng: -99, density: 5, region: "Central Mexico" },
              
              // South America - Low to medium density
              { lat: -23, lng: -46, density: 6, region: "Southeast Brazil" },
              { lat: -34, lng: -58, density: 3, region: "Argentina" },
              { lat: 4, lng: -74, density: 2, region: "Colombia" },
              
              // Africa - Variable density
              { lat: 6, lng: 3, density: 8, region: "Nigeria" },
              { lat: 30, lng: 31, density: 4, region: "Egypt" },
              { lat: -26, lng: 28, density: 3, region: "South Africa" },
              { lat: -1, lng: 37, density: 2, region: "East Africa" },
              
              // Middle East
              { lat: 35, lng: 51, density: 3, region: "Iran" },
              { lat: 25, lng: 55, density: 2, region: "UAE" },
              
              // Oceania - Low density
              { lat: -34, lng: 151, density: 2, region: "Australia East" },
              { lat: -37, lng: 145, density: 2, region: "Australia South" }
            ];
            
            // Find closest region to determine density
            let closestRegion = populationRegions[0];
            let minDistance = Number.MAX_VALUE;
            
            populationRegions.forEach(region => {
              const distance = Math.sqrt(
                Math.pow(startLat - region.lat, 2) + 
                Math.pow(startLng - region.lng, 2)
              );
              if (distance < minDistance) {
                minDistance = distance;
                closestRegion = region;
              }
            });
            
            // Color based on population density (heatmap style)
            const density = closestRegion.density;
            if (density >= 15) {
              return 'rgba(220, 38, 38, 0.8)'; // Red - Highest density
            } else if (density >= 12) {
              return 'rgba(249, 115, 22, 0.8)'; // Orange-Red - Very high density
            } else if (density >= 9) {
              return 'rgba(245, 158, 11, 0.8)'; // Orange - High density
            } else if (density >= 6) {
              return 'rgba(251, 191, 36, 0.8)'; // Yellow - Medium-high density
            } else if (density >= 4) {
              return 'rgba(34, 197, 94, 0.8)'; // Green - Medium density
            } else if (density >= 2) {
              return 'rgba(59, 130, 246, 0.8)'; // Blue - Low density
            } else {
              return 'rgba(147, 51, 234, 0.8)'; // Purple - Very low density
            }
          }}
          pathDashLength={0.01}
          pathDashGap={0.004}
          pathDashAnimateTime={100000}
          pathPointAlt={0.003}
          pathTransitionDuration={0}
          width={dimensions.width}
          height={dimensions.height}
        />
      </div>
    </div>
  );
}