"use client"

import React from "react"
import { useTranslation } from "react-i18next"
import Background from "../components/Background"
import Sidebar from "../components/Sidebar"
import FeatureCard from "../components/FeatureCard"
import AnimatedCharacter from "../components/AnimatedCharacter"
import HeroSection from "../components/HeroSection"
import FloatingAnimation from "../components/FloatingAnimation"
import PopupLanguageSelector from "../components/PopupLanguageSelector"
import "../i18n" // Import the i18n configuration

export default function LandingPage() {
  const { t } = useTranslation()

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background />
      <Sidebar />
      <PopupLanguageSelector />
      <main className="relative z-10 p-8 ml-10">
        <HeroSection />
        <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            title={t("brightPathGames")}
            description={t("brightPathGamesDesc")}
            icon="🎮"
            color="bg-yellow-300"
          />
          <FeatureCard
            title={t("progressTracker")}
            description={t("progressTrackerDesc")}
            icon="📊"
            color="bg-green-300"
          />
          <FeatureCard
            title={t("brightPathStories")}
            description={t("brightPathStoriesDesc")}
            icon="📚"
            color="bg-pink-300"
          />
          <FeatureCard
            title={t("socialSkillsBuilder")}
            description={t("socialSkillsBuilderDesc")}
            icon="🤝"
            color="bg-purple-300"
          />
        </div>
        <AnimatedCharacter character="🐶" style={{ top: "20%", left: "10%" }} />
        <AnimatedCharacter character="🐱" style={{ top: "60%", right: "15%" }} />
        <AnimatedCharacter character="🐰" style={{ top: "40%", left: "80%" }} />
        <FloatingAnimation animation="float">
          <span className="text-4xl">🎈</span>
        </FloatingAnimation>
        <FloatingAnimation animation="twinkle">
          <span className="text-4xl">⭐</span>
        </FloatingAnimation>
      </main>
    </div>
  )
}

