import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const DataAnalyticsAnalysis = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Clean Data Analytics track data
  const analyticsInterns = [
    {
      name: "Blessing Nwachukwu",
      excelBefore: 8, excelAfter: 8,
      sqlBefore: 5, sqlAfter: 7,
      pbiBefore: 8, pbiAfter: 8,
      analysisBefore: 7, analysisAfter: 8,
      commBefore: 6, commAfter: 7,
      projects: 2,
      sunfi: "No",
      quality: "Average",
      slack: "Active",
      assignments: "Most (75%)",
      confidence: 7,
      mentorRating: 9,
      challenge: "Interaction with fellow fans interns",
      achievement: "My maternal health project",
      comments: "Good Experience"
    },
    {
      name: "Alexander Kwambatala",
      excelBefore: 8, excelAfter: 8,
      sqlBefore: 1, sqlAfter: 5,
      pbiBefore: 5, pbiAfter: 8,
      analysisBefore: 5, analysisAfter: 8,
      commBefore: 2, commAfter: 5,
      projects: 1,
      sunfi: "Yes",
      quality: "Average",
      slack: "Active",
      assignments: "Some (50%)",
      confidence: 4,
      mentorRating: 8,
      challenge: "The Sunfi wasn't properly planned, would have been better after the dataverse classes",
      achievement: "Learning power BI and how to go about google doc sheets",
      comments: "Fun, challenging. The Sunfi group would have been best if we did it at the end of the 6 weeks"
    },
    {
      name: "Ogediniru Uzoma",
      excelBefore: 6, excelAfter: 8,
      sqlBefore: 5, sqlAfter: 7,
      pbiBefore: 6, pbiAfter: 7,
      analysisBefore: 5, analysisAfter: 8,
      commBefore: 6, commAfter: 8,
      projects: 2,
      sunfi: "No",
      quality: "Excellent",
      slack: "Rarely Active",
      assignments: "Most (75%)",
      confidence: null,
      mentorRating: null,
      challenge: "",
      achievement: "",
      comments: ""
    },
    {
      name: "Ademijube Victoria",
      excelBefore: 4, excelAfter: 6,
      sqlBefore: 6, sqlAfter: 7,
      pbiBefore: 4, pbiAfter: 6,
      analysisBefore: 4, analysisAfter: 6,
      commBefore: 4, commAfter: 7,
      projects: 2,
      sunfi: "No",
      quality: "Good",
      slack: "Active",
      assignments: "Some (50%)",
      confidence: 8,
      mentorRating: 8,
      challenge: "The time for project is limited due to busy work schedules",
      achievement: "Getting better in building dashboards",
      comments: ""
    },
    {
      name: "Olukemi Awodokun",
      excelBefore: 6, excelAfter: 6,
      sqlBefore: 5, sqlAfter: 5,
      pbiBefore: 6, pbiAfter: 6,
      analysisBefore: 6, analysisAfter: 6,
      commBefore: 6, commAfter: 6,
      projects: 2,
      sunfi: "No",
      quality: "Excellent",
      slack: "Very active",
      assignments: "All (100%)",
      confidence: 6,
      mentorRating: null,
      challenge: "",
      achievement: "",
      comments: "Got into Data Analytics track towards the end of third week. Would appreciate if I can be taken through some lessons I missed. Health 4 mentor has been great."
    },
    {
      name: "Philip Odiachi",
      excelBefore: 7, excelAfter: 9,
      sqlBefore: 5, sqlAfter: 8,
      pbiBefore: 3, pbiAfter: 5,
      analysisBefore: 5, analysisAfter: 7,
      commBefore: 5, commAfter: 5,
      projects: 2,
      sunfi: "Yes",
      quality: "Average",
      slack: "Somewhat Active",
      assignments: "None",
      confidence: 4,
      mentorRating: 3,
      challenge: "Collaboration",
      achievement: "Knowing I'm getting better at SQL and Power BI",
      comments: "Briefing should be held with members before embarking on projects to give direction and entertain questions"
    },
    {
      name: "AMARACHI FLORENCE",
      excelBefore: 5, excelAfter: 6,
      sqlBefore: 4, sqlAfter: 5,
      pbiBefore: 5, pbiAfter: 6,
      analysisBefore: 5, analysisAfter: 6,
      commBefore: 5, commAfter: 6,
      projects: 4,
      sunfi: "Yes",
      quality: "Excellent",
      slack: "Very active",
      assignments: "Most (75%)",
      confidence: 8,
      mentorRating: 8,
      challenge: "Time management, but working on it",
      achievement: "Completing full end-to-end data analysis project with SQL cleaning and Power BI visualization",
      comments: "Incredibly rewarding experience. SunFi team was collaborative. Tasks were challenging yet manageable."
    },
    {
      name: "Ifunanya Loveth",
      excelBefore: 9, excelAfter: 9,
      sqlBefore: 8, sqlAfter: 8,
      pbiBefore: 8, pbiAfter: 8,
      analysisBefore: 7, analysisAfter: 7,
      commBefore: 7, commAfter: 7,
      projects: 4,
      sunfi: "Yes",
      quality: "Excellent",
      slack: "Active",
      assignments: "All (100%)",
      confidence: 4,
      mentorRating: null,
      challenge: "",
      achievement: "",
      comments: "Wonderful experience practicing analytics in 2 domains. Mentors should have better sense of constructive criticism to motivate learners and not demoralize."
    },
    {
      name: "Majekodunmi Mumeen",
      excelBefore: 7, excelAfter: 8,
      sqlBefore: 4, sqlAfter: 5,
      pbiBefore: 6, pbiAfter: 7,
      analysisBefore: 7, analysisAfter: 8,
      commBefore: 4, commAfter: 5,
      projects: 2,
      sunfi: "Yes",
      quality: "Good",
      slack: "Active",
      assignments: "Most (75%)",
      confidence: 7,
      mentorRating: 6,
      challenge: "Nil",
      achievement: "Ability to complete a project within a week",
      comments: ""
    },
    {
      name: "DJEUMETIO NOUMEDEM",
      excelBefore: 6, excelAfter: 7,
      sqlBefore: 2, sqlAfter: 4,
      pbiBefore: 1, pbiAfter: 6,
      analysisBefore: 4, analysisAfter: 6,
      commBefore: 6, commAfter: 7,
      projects: 1,
      sunfi: "Yes",
      quality: "Good",
      slack: "Active",
      assignments: "Some (50%)",
      confidence: 6,
      mentorRating: 7,
      challenge: "Timing and access to data analysis software",
      achievement: "Create a dashboard with Power BI",
      comments: ""
    },
    {
      name: "Sarah Obiajulu",
      excelBefore: 6, excelAfter: 8,
      sqlBefore: 6, sqlAfter: 7,
      pbiBefore: 5, pbiAfter: 7,
      analysisBefore: 6, analysisAfter: 8,
      commBefore: 5, commAfter: 7,
      projects: 2,
      sunfi: "No",
      quality: "Good",
      slack: "Active",
      assignments: "Most (75%)",
      confidence: 7,
      mentorRating: 8,
      challenge: "Timing of project submission",
      achievement: "Completing my project from start to finish all by myself",
      comments: ""
    },
    {
      name: "Djomou Tiayon",
      excelBefore: 6, excelAfter: 7,
      sqlBefore: 5, sqlAfter: 7,
      pbiBefore: 5, pbiAfter: 7,
      analysisBefore: 5, analysisAfter: 6,
      commBefore: 5, commAfter: 6,
      projects: 2,
      sunfi: "No",
      quality: "Good",
      slack: "Somewhat Active",
      assignments: "Some (50%)",
      confidence: 6,
      mentorRating: 5,
      challenge: "Keeping myself motivated",
      achievement: "Dashboarding and insight presentation",
      comments: "Overall experience can be improved by having live check-in sessions with mentors for discussion and feedback. Include training on how to communicate/present insights."
    },
    {
      name: "Modupe Aderibigbe",
      excelBefore: 5, excelAfter: 8,
      sqlBefore: 2, sqlAfter: 6,
      pbiBefore: 6, pbiAfter: 8,
      analysisBefore: 5, analysisAfter: 7,
      commBefore: 3, commAfter: 6,
      projects: 2,
      sunfi: "No",
      quality: "Good",
      slack: "Active",
      assignments: "All (100%)",
      confidence: 6,
      mentorRating: 10,
      challenge: "Time",
      achievement: "Have confidence to interpret analysis, know how to identify project problems",
      comments: "Want to appreciate Mr Promise for guidance and Dataverse for this opportunity"
    }
  ];

  // Calculate comprehensive statistics
  const stats = useMemo(() => {
    const total = analyticsInterns.length;
    
    // Skill averages
    const calcAvg = (field) => {
      const values = analyticsInterns.map(i => i[field]).filter(v => v !== null);
      return values.length > 0 ? (values.reduce((a, b) => a + b, 0) / values.length).toFixed(2) : 0;
    };

    const excelBeforeAvg = calcAvg('excelBefore');
    const excelAfterAvg = calcAvg('excelAfter');
    const sqlBeforeAvg = calcAvg('sqlBefore');
    const sqlAfterAvg = calcAvg('sqlAfter');
    const pbiBeforeAvg = calcAvg('pbiBefore');
    const pbiAfterAvg = calcAvg('pbiAfter');
    const analysisBeforeAvg = calcAvg('analysisBefore');
    const analysisAfterAvg = calcAvg('analysisAfter');
    const commBeforeAvg = calcAvg('commBefore');
    const commAfterAvg = calcAvg('commAfter');

    // Calculate improvement
    const excelImprovement = ((excelAfterAvg - excelBeforeAvg) / excelBeforeAvg * 100).toFixed(1);
    const sqlImprovement = ((sqlAfterAvg - sqlBeforeAvg) / sqlBeforeAvg * 100).toFixed(1);
    const pbiImprovement = ((pbiAfterAvg - pbiBeforeAvg) / pbiBeforeAvg * 100).toFixed(1);
    const analysisImprovement = ((analysisAfterAvg - analysisBeforeAvg) / analysisBeforeAvg * 100).toFixed(1);
    const commImprovement = ((commAfterAvg - commBeforeAvg) / commBeforeAvg * 100).toFixed(1);

    // Project stats
    const avgProjects = calcAvg('projects');
    const highPerformers = analyticsInterns.filter(i => i.projects >= 3).length;
    
    // Confidence & Mentor rating
    const avgConfidence = calcAvg('confidence');
    const avgMentorRating = calcAvg('mentorRating');

    // SunFi participation
    const sunfiYes = analyticsInterns.filter(i => i.sunfi === "Yes").length;
    const sunfiNo = analyticsInterns.filter(i => i.sunfi === "No").length;

    // Quality distribution
    const qualityDist = {
      "Excellent": analyticsInterns.filter(i => i.quality === "Excellent").length,
      "Good": analyticsInterns.filter(i => i.quality === "Good").length,
      "Average": analyticsInterns.filter(i => i.quality === "Average").length,
    };

    // Slack engagement
    const slackDist = {
      "Very active": analyticsInterns.filter(i => i.slack === "Very active").length,
      "Active": analyticsInterns.filter(i => i.slack === "Active").length,
      "Somewhat Active": analyticsInterns.filter(i => i.slack === "Somewhat Active").length,
      "Rarely Active": analyticsInterns.filter(i => i.slack === "Rarely Active").length,
    };

    // Assignment submission
    const assignmentDist = {
      "All (100%)": analyticsInterns.filter(i => i.assignments === "All (100%)").length,
      "Most (75%)": analyticsInterns.filter(i => i.assignments === "Most (75%)").length,
      "Some (50%)": analyticsInterns.filter(i => i.assignments === "Some (50%)").length,
      "None": analyticsInterns.filter(i => i.assignments === "None").length,
    };

    return {
      total,
      excelBeforeAvg, excelAfterAvg, excelImprovement,
      sqlBeforeAvg, sqlAfterAvg, sqlImprovement,
      pbiBeforeAvg, pbiAfterAvg, pbiImprovement,
      analysisBeforeAvg, analysisAfterAvg, analysisImprovement,
      commBeforeAvg, commAfterAvg, commImprovement,
      avgProjects, highPerformers,
      avgConfidence, avgMentorRating,
      sunfiYes, sunfiNo,
      qualityDist, slackDist, assignmentDist
    };
  }, []);

  // Chart data
  const skillComparisonData = [
    { skill: 'Excel', Before: parseFloat(stats.excelBeforeAvg), After: parseFloat(stats.excelAfterAvg) },
    { skill: 'SQL', Before: parseFloat(stats.sqlBeforeAvg), After: parseFloat(stats.sqlAfterAvg) },
    { skill: 'Power BI', Before: parseFloat(stats.pbiBeforeAvg), After: parseFloat(stats.pbiAfterAvg) },
    { skill: 'Analysis', Before: parseFloat(stats.analysisBeforeAvg), After: parseFloat(stats.analysisAfterAvg) },
    { skill: 'Communication', Before: parseFloat(stats.commBeforeAvg), After: parseFloat(stats.commAfterAvg) },
  ];

  const improvementData = [
    { skill: 'Excel', improvement: parseFloat(stats.excelImprovement) },
    { skill: 'SQL', improvement: parseFloat(stats.sqlImprovement) },
    { skill: 'Power BI', improvement: parseFloat(stats.pbiImprovement) },
    { skill: 'Analysis', improvement: parseFloat(stats.analysisImprovement) },
    { skill: 'Communication', improvement: parseFloat(stats.commImprovement) },
  ];

  const sunfiData = [
    { name: 'Participated', value: stats.sunfiYes },
    { name: 'Did Not Participate', value: stats.sunfiNo },
  ];

  const qualityData = Object.entries(stats.qualityDist).map(([name, value]) => ({ name, value }));
  const slackData = Object.entries(stats.slackDist).map(([name, value]) => ({ name, value }));
  const assignmentData = Object.entries(stats.assignmentDist).map(([name, value]) => ({ name, value }));

  const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'];

  // Extract feedback summaries
  const feedbackSummary = {
    challenges: analyticsInterns
      .filter(i => i.challenge && i.challenge.trim() !== "" && i.challenge.toLowerCase() !== "nil")
      .map(i => `• ${i.name}: ${i.challenge}`),
    achievements: analyticsInterns
      .filter(i => i.achievement && i.achievement.trim() !== "")
      .map(i => `• ${i.name}: ${i.achievement}`),
    comments: analyticsInterns
      .filter(i => i.comments && i.comments.trim() !== "")
      .map(i => `• ${i.name}: ${i.comments}`)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Data Analytics Track - Cohort 3.0 Analysis
          </h1>
          <p className="text-gray-600">
            Comprehensive Assessment Report - October 2025
          </p>
          <div className="mt-4 flex gap-4">
            <div className="bg-indigo-50 px-4 py-2 rounded-lg">
              <span className="text-sm text-indigo-600 font-semibold">Total Interns: {stats.total}</span>
            </div>
            <div className="bg-green-50 px-4 py-2 rounded-lg">
              <span className="text-sm text-green-600 font-semibold">Avg Projects: {stats.avgProjects}</span>
            </div>
            <div className="bg-purple-50 px-4 py-2 rounded-lg">
              <span className="text-sm text-purple-600 font-semibold">High Performers (3+ projects): {stats.highPerformers}</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-6">
          <div className="flex border-b overflow-x-auto">
            {['overview', 'numerical', 'categorical', 'feedback'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-semibold capitalize transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-b-2 border-indigo-600 text-indigo-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Excel Proficiency</h3>
                <div className="text-3xl font-bold text-indigo-600">{stats.excelAfterAvg}/10</div>
                <div className={`text-sm mt-2 ${parseFloat(stats.excelImprovement) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {stats.excelImprovement > 0 ? '+' : ''}{stats.excelImprovement}% change
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">SQL Proficiency</h3>
                <div className="text-3xl font-bold text-blue-600">{stats.sqlAfterAvg}/10</div>
                <div className={`text-sm mt-2 ${parseFloat(stats.sqlImprovement) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {stats.sqlImprovement > 0 ? '+' : ''}{stats.sqlImprovement}% change
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Power BI Proficiency</h3>
                <div className="text-3xl font-bold text-purple-600">{stats.pbiAfterAvg}/10</div>
                <div className={`text-sm mt-2 ${parseFloat(stats.pbiImprovement) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {stats.pbiImprovement > 0 ? '+' : ''}{stats.pbiImprovement}% change
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Avg Confidence</h3>
                <div className="text-3xl font-bold text-green-600">{stats.avgConfidence}/10</div>
                <div className="text-sm mt-2 text-gray-600">
                  Mentor Rating: {stats.avgMentorRating}/10
                </div>
              </div>
            </div>

            {/* Skills Comparison Chart */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">All Skills: Before vs After</h2>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={skillComparisonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="skill" />
                  <YAxis domain={[0, 10]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Before" fill="#94a3b8" />
                  <Bar dataKey="After" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Improvement Chart */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Skill Improvement Percentage</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={improvementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="skill" />
                  <YAxis />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="improvement" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Numerical Analysis Tab */}
        {activeTab === 'numerical' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Detailed Numerical Analysis</h2>
              
              {/* Skills Table */}
              <div className="overflow-x-auto mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Individual Skill Progression</h3>
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Intern</th>
                      <th className="px-4 py-3 text-center font-semibold text-gray-700">Excel (B→A)</th>
                      <th className="px-4 py-3 text-center font-semibold text-gray-700">SQL (B→A)</th>
                      <th className="px-4 py-3 text-center font-semibold text-gray-700">Power BI (B→A)</th>
                      <th className="px-4 py-3 text-center font-semibold text-gray-700">Analysis (B→A)</th>
                      <th className="px-4 py-3 text-center font-semibold text-gray-700">Comm (B→A)</th>
                      <th className="px-4 py-3 text-center font-semibold text-gray-700">Projects</th>
                      <th className="px-4 py-3 text-center font-semibold text-gray-700">Confidence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {analyticsInterns.map((intern, idx) => {
                      const excelChange = intern.excelAfter - intern.excelBefore;
                      const sqlChange = intern.sqlAfter - intern.sqlBefore;
                      const pbiChange = intern.pbiAfter - intern.pbiBefore;
                      const analysisChange = intern.analysisAfter - intern.analysisBefore;
                      const commChange = intern.commAfter - intern.commBefore;
                      
                      return (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="px-4 py-3">{intern.name}</td>
                          <td className="px-4 py-3 text-center">
                            <span className={excelChange >= 0 ? 'text-green-600' : 'text-red-600'}>
                              {intern.excelBefore}→{intern.excelAfter} ({excelChange >= 0 ? '+' : ''}{excelChange})
                            </span>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span className={sqlChange >= 0 ? 'text-green-600' : 'text-red-600'}>
                              {intern.sqlBefore}→{intern.sqlAfter} ({sqlChange >= 0 ? '+' : ''}{sqlChange})
                            </span>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span className={pbiChange >= 0 ? 'text-green-600' : 'text-red-600'}>
                              {intern.pbiBefore}→{intern.pbiAfter} ({pbiChange >= 0 ? '+' : ''}{pbiChange})
                            </span>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span className={analysisChange >= 0 ? 'text-green-600' : 'text-red-600'}>
                              {intern.analysisBefore}→{intern.analysisAfter} ({analysisChange >= 0 ? '+' : ''}{analysisChange})
                            </span>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span className={commChange >= 0 ? 'text-green-600' : 'text-red-600'}>
                              {intern.commBefore}→{intern.commAfter} ({commChange >= 0 ? '+' : ''}{commChange})
                            </span>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              intern.projects >= 3 ? 'bg-green-100 text-green-800' :
                              intern.projects >= 2 ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {intern.projects}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-center font-semibold">
                            {intern.confidence || 'N/A'}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Summary Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-sm text-blue-600 font-semibold mb-1">Excel Avg Growth</div>
                  <div className="text-2xl font-bold text-blue-900">{stats.excelImprovement}%</div>
                  <div className="text-xs text-blue-600">{stats.excelBeforeAvg} → {stats.excelAfterAvg}</div>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4">
                  <div className="text-sm text-indigo-600 font-semibold mb-1">SQL Avg Growth</div>
                  <div className="text-2xl font-bold text-indigo-900">{stats.sqlImprovement}%</div>
                  <div className="text-xs text-indigo-600">{stats.sqlBeforeAvg} → {stats.sqlAfterAvg}</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-sm text-purple-600 font-semibold mb-1">Power BI Avg Growth</div>
                  <div className="text-2xl font-bold text-purple-900">{stats.pbiImprovement}%</div>
                  <div className="text-xs text-purple-600">{stats.pbiBeforeAvg} → {stats.pbiAfterAvg}</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-sm text-green-600 font-semibold mb-1">Analysis Avg Growth</div>
                  <div className="text-2xl font-bold text-green-900">{stats.analysisImprovement}%</div>
                  <div className="text-xs text-green-600">{stats.analysisBeforeAvg} → {stats.analysisAfterAvg}</div>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <div className="text-sm text-amber-600 font-semibold mb-1">Communication Growth</div>
                  <div className="text-2xl font-bold text-amber-900">{stats.commImprovement}%</div>
                  <div className="text-xs text-amber-600">{stats.commBeforeAvg} → {stats.commAfterAvg}</div>
                </div>
                <div className="bg-pink-50 rounded-lg p-4">
                  <div className="text-sm text-pink-600 font-semibold mb-1">Avg Confidence</div>
                  <div className="text-2xl font-bold text-pink-900">{stats.avgConfidence}/10</div>
                  <div className="text-xs text-pink-600">Job readiness perception</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Categorical Analysis Tab */}
        {activeTab === 'categorical' && (
          <div className="space-y-6">
            {/* SunFi Participation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">SunFi Project Participation</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={sunfiData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({name, value, percent}) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {sunfiData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    <strong>{stats.sunfiYes}</strong> participated | <strong>{stats.sunfiNo}</strong> did not participate
                  </p>
                </div>
              </div>

              {/* Project Quality */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Project Quality Distribution</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={qualityData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({name, value, percent}) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {qualityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Slack Engagement */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Slack Engagement Levels</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={slackData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Assignment Submission */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Assignment Submission Rates</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={assignmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Categorical Summary Table */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Complete Categorical Breakdown</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Intern Name</th>
                      <th className="px-4 py-3 text-center font-semibold text-gray-700">SunFi</th>
                      <th className="px-4 py-3 text-center font-semibold text-gray-700">Quality</th>
                      <th className="px-4 py-3 text-center font-semibold text-gray-700">Slack</th>
                      <th className="px-4 py-3 text-center font-semibold text-gray-700">Assignments</th>
                      <th className="px-4 py-3 text-center font-semibold text-gray-700">Mentor Rating</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {analyticsInterns.map((intern, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-3">{intern.name}</td>
                        <td className="px-4 py-3 text-center">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            intern.sunfi === "Yes" ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {intern.sunfi}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            intern.quality === "Excellent" ? 'bg-green-100 text-green-800' :
                            intern.quality === "Good" ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {intern.quality}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center text-sm">{intern.slack}</td>
                        <td className="px-4 py-3 text-center text-sm">{intern.assignments}</td>
                        <td className="px-4 py-3 text-center">
                          <span className="font-semibold text-indigo-600">
                            {intern.mentorRating ? `${intern.mentorRating}/10` : 'N/A'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Feedback Summary Tab */}
        {activeTab === 'feedback' && (
          <div className="space-y-6">
            {/* Challenges Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-red-900 mb-4">🚧 Challenges Reported by Interns</h2>
              <div className="bg-red-50 rounded-lg p-4">
                <div className="space-y-3 text-sm text-gray-800">
                  {feedbackSummary.challenges.length > 0 ? (
                    feedbackSummary.challenges.map((item, idx) => (
                      <div key={idx} className="border-l-4 border-red-400 pl-4 py-2">
                        {item}
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 italic">No challenges reported</p>
                  )}
                </div>
              </div>

              {/* Challenge Themes */}
              <div className="mt-4 bg-amber-50 rounded-lg p-4">
                <h3 className="font-semibold text-amber-900 mb-2">📊 Common Challenge Themes:</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li><strong>Time Management:</strong> Multiple interns mentioned limited time for projects and busy schedules</li>
                  <li><strong>Project Planning:</strong> SunFi project timing and briefing concerns raised</li>
                  <li><strong>Collaboration:</strong> Some difficulty with team coordination</li>
                  <li><strong>Technical Issues:</strong> Access to software and tools</li>
                  <li><strong>Motivation:</strong> One intern mentioned staying motivated</li>
                </ul>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-green-900 mb-4">🏆 Significant Achievements</h2>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="space-y-3 text-sm text-gray-800">
                  {feedbackSummary.achievements.length > 0 ? (
                    feedbackSummary.achievements.map((item, idx) => (
                      <div key={idx} className="border-l-4 border-green-400 pl-4 py-2">
                        {item}
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 italic">No achievements reported</p>
                  )}
                </div>
              </div>

              {/* Achievement Themes */}
              <div className="mt-4 bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">✨ Key Achievement Highlights:</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li><strong>Dashboard Building:</strong> Multiple interns proud of creating dashboards independently</li>
                  <li><strong>End-to-End Projects:</strong> Completing full data analysis workflows (cleaning, analysis, visualization)</li>
                  <li><strong>Technical Skills:</strong> Mastering SQL, Power BI, and Google Sheets</li>
                  <li><strong>Confidence Growth:</strong> Ability to interpret analysis and identify project problems</li>
                  <li><strong>Speed:</strong> Completing projects within one week deadline</li>
                </ul>
              </div>
            </div>

            {/* General Comments Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-blue-900 mb-4">💬 General Experience Comments</h2>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="space-y-3 text-sm text-gray-800">
                  {feedbackSummary.comments.length > 0 ? (
                    feedbackSummary.comments.map((item, idx) => (
                      <div key={idx} className="border-l-4 border-blue-400 pl-4 py-2">
                        {item}
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 italic">No general comments provided</p>
                  )}
                </div>
              </div>
            </div>

            {/* Actionable Insights */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-indigo-900 mb-4">💡 Actionable Insights from Feedback</h2>
              
              <div className="space-y-4">
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h3 className="font-semibold text-indigo-900 mb-2">✅ Positive Feedback:</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Overall experience described as "wonderful," "rewarding," "fun," and "good"</li>
                    <li>Interns appreciated the collaborative SunFi team environment</li>
                    <li>Tasks were challenging but manageable, promoting critical thinking</li>
                    <li>Mentors (especially Mr. Promise and Health 4 mentor) received praise</li>
                    <li>Opportunity to practice analytics across multiple domains valued</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 mb-2">⚠️ Areas for Improvement:</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li><strong>Project Timing:</strong> SunFi project should come after foundational training completed</li>
                    <li><strong>Pre-Project Briefings:</strong> Hold briefings before projects to give direction and answer questions</li>
                    <li><strong>Mentor Training:</strong> Better sense of "constructive criticism" needed to motivate, not demoralize</li>
                    <li><strong>Live Check-ins:</strong> Add live mentor sessions for discussion and feedback</li>
                    <li><strong>Communication Training:</strong> Include explicit training on presenting insights</li>
                    <li><strong>Late Joiners:</strong> Support for those who joined mid-cohort (catch-up materials)</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-green-900 mb-2">🎯 Recommendations for Cohort 4.0:</h3>
                  <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                    <li>Schedule complex projects (like SunFi) for weeks 5-6, not weeks 1-3</li>
                    <li>Implement mandatory pre-project briefing sessions</li>
                    <li>Train mentors on providing constructive feedback effectively</li>
                    <li>Add weekly live Q&A/check-in sessions with mentors</li>
                    <li>Include dedicated module on data storytelling and insight presentation</li>
                    <li>Create catch-up resources for late joiners or those who miss sessions</li>
                    <li>Consider extending project deadlines or providing buffer time for working professionals</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Sentiment Analysis */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">😊 Overall Sentiment Analysis</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-100 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-2">😊</div>
                  <div className="text-2xl font-bold text-green-900">Positive</div>
                  <div className="text-sm text-green-700 mt-2">
                    Most interns expressed satisfaction and appreciation
                  </div>
                </div>
                <div className="bg-yellow-100 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-2">😐</div>
                  <div className="text-2xl font-bold text-yellow-900">Constructive</div>
                  <div className="text-sm text-yellow-700 mt-2">
                    Valuable feedback on timing and mentorship approach
                  </div>
                </div>
                <div className="bg-blue-100 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-2">🎯</div>
                  <div className="text-2xl font-bold text-blue-900">Growth-Oriented</div>
                  <div className="text-sm text-blue-700 mt-2">
                    Interns show self-awareness and desire to improve
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Export Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">📊 Analysis Complete</h2>
          <p className="mb-6 text-indigo-100">
            This comprehensive analysis covers {stats.total} Data Analytics interns with complete numerical, categorical, and qualitative feedback analysis.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              📥 Download Full Report
            </button>
            <button className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-colors">
              📧 Email to CEO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnalyticsAnalysis;