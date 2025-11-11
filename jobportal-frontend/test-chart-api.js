// Test script for chart API endpoint
// Run this with: node test-chart-api.js

const axios = require('axios');

async function testChartAPI() {
  try {
    console.log('🧪 Testing Chart API Endpoint...\n');
    
    // Test different time ranges
    const timeRanges = ['7d', '30d', '90d', '6mon', '12mon'];
    
    for (const range of timeRanges) {
      console.log(`📊 Testing time range: ${range}`);
      
      const response = await axios.get(`https://job-mela-india-production.up.railway.app/api/jobs/chart-stats?timeRange=${range}`);
      
      console.log(`✅ Status: ${response.status}`);
      console.log(`📈 Data points: ${response.data.length}`);
      
      if (response.data.length > 0) {
        console.log(`📅 Sample data point:`, response.data[0]);
      }
      
      console.log('---\n');
    }
    
    console.log('🎉 All tests completed successfully!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
  }
}

// Run the test
testChartAPI(); 