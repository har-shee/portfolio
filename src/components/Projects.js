import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "ATAC-seq Workflow for Leukemia Analysis",
        description:
            "Developed a fully automated and reproducible ATAC-seq analysis pipeline using Nextflow DSL2 to identify chromatin accessibility differences between leukemic (K562) and healthy (GM12878) human cell lines. The workflow includes quality control, adapter trimming, alignment (Bowtie2), peak calling (MACS2), differential accessibility analysis (DESeq2), gene annotation, and functional enrichment. Results are visualized with volcano plots, heatmaps, PCA, and pathway enrichment charts, highlighting key genes and pathways involved in leukemogenesis.",
        tech: ["Nextflow", "MACS2", "DESeq2", "Bowtie2", "FastQC", "Trim Galore", "IGV", "Bedtools", "R", "g:Profiler"],
        link: "https://github.com/har-shee/ChromatinAccessibilityLeukemiaATACSeq"
    },
    {
        title: "Parallel Merge Sort with Load Balancing",
        description:
            "Implemented histogram-based parallel merge sort in C++ using OpenMP, based on Jeon & Kim's algorithm. Conducted performance benchmarking on datasets up to 50 million elements with varying distributions (random, sorted, reversed, skewed). Demonstrated the strengths and limitations of histogram-based load balancing compared to dynamic and static partitioning methods.",
        tech: ["C++", "OpenMP"],
        link: "https://github.com/har-shee/LoadBalancingParallelMergeSortStrategy"
    },
    {
        title: "Stock Market Price Prediction using Machine Learning",
        description:
            "Utilized Apple stock data to build and evaluate LSTM neural networks using Python to forecast price trends based on historical data.",
        tech: ["Python", "LSTM"],
        link: "#",
    },
    {
        title: "Quantum Key Distribution using Quantum Computing",
        description:
            "Simulated secure communication using quantum key exchange with qubits, applying quantum principles to enhance encryption and prevent eavesdropping.",
        tech: ["Qiskit", "Quantum Computing"],
        link: "#",
    },
];

const fadeVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
        },
    }),
};

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white text-gray-800">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-indigo-600">Projects</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeVariant}
                            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-700 mb-3">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            {project.link !== "#" && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline text-sm"
                                >
                                    View Project →
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
