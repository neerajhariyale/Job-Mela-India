// Test script for job statistics API endpoints
// Run this with: node test-job-stats.js

const axios = require('axios');

async function testJobStatsAPI() {
  try {
    console.log('🧪 Testing Job Statistics API Endpoints...\n');
    
    // Test the stats endpoint
    console.log('📊 Testing /api/jobs/stats endpoint...');
    const statsResponse = await axios.get('http://localhost:5000/api/jobs/stats');
    
    console.log('✅ Status:', statsResponse.status);
    console.log('📈 Job Statistics:', statsResponse.data);
    
    // Test the chart-stats endpoint
    console.log('\n📊 Testing /api/jobs/chart-stats endpoint...');
    const chartResponse = await axios.get('http://localhost:5000/api/jobs/chart-stats?timeRange=7d');
    
    console.log('✅ Status:', chartResponse.status);
    console.log('📈 Chart Data Points:', chartResponse.data.length);
    
    if (chartResponse.data.length > 0) {
      console.log('📅 Sample chart data:', chartResponse.data[0]);
    }
    
    console.log('\n🎉 All tests completed successfully!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
  }
}

// Run the test
testJobStatsAPI(); 